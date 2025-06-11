import { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import OrderSummary from "./components/OrderSummary";

const ShoppingApp = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "Laptop Gaming",
      price: 1200,
      category: "electronics",
      stock: 5,
    },
    {
      id: 2,
      name: "Mouse Gamer",
      price: 80,
      category: "electronics",
      stock: 10,
    },
    {
      id: 3,
      name: "Teclado Mecánico",
      price: 150,
      category: "electronics",
      stock: 7,
    },
    { id: 4, name: "Audífonos", price: 200, category: "electronics", stock: 3 },
    { id: 5, name: "Camiseta", price: 25, category: "clothing", stock: 20 },
    { id: 6, name: "Jeans", price: 60, category: "clothing", stock: 15 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // 📤 Funciones que modifican el estado - se pasan hacia abajo
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // 🧮 Valores computados basados en el estado elevado
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🛒 Lifting State Up - Shopping App
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FILTROS - Recibe estado y funciones del padre */}
          <div className="lg:col-span-2">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              totalProducts={filteredProducts.length}
            />

            {/* LISTA DE PRODUCTOS - Recibe productos y función addToCart */}
            <ProductList
              products={filteredProducts}
              onAddToCart={addToCart}
              cart={cart} // Para mostrar cantidades
            />
          </div>

          {/* CARRITO - Recibe todo el estado del carrito y funciones */}
          <div className="lg:col-span-1">
            <ShoppingCart
              cart={cart}
              totalItems={totalItems}
              totalPrice={totalPrice}
              onUpdateQuantity={updateCartQuantity}
              onRemoveItem={removeFromCart}
              onClearCart={clearCart}
            />

            {/* RESUMEN - También usa el estado elevado */}
            <OrderSummary
              cart={cart}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔍 COMPONENTE DE FILTROS - Recibe estado y callbacks del padre
const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  totalProducts,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">🔍 Filtros</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-medium mb-2">
            Buscar productos:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Escribe para buscar..."
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Categoría:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="all" className="text-black">
              Todas las categorías
            </option>
            <option value="electronics" className="text-black">
              Electrónicos
            </option>
            <option value="clothing" className="text-black">
              Ropa
            </option>
          </select>
        </div>
      </div>

      <p className="text-yellow-300 mt-4 text-center">
        📦 Mostrando {totalProducts} productos
      </p>
    </div>
  );
};

export default ShoppingApp;
