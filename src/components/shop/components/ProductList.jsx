const ProductList = ({ products, onAddToCart, cart }) => {
  const getCartQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <span
              className={`px-2 py-1 rounded text-xs ${
                product.category === "electronics"
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
            >
              {product.category === "electronics" ? "💻" : "👕"}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-green-400">
              ${product.price}
            </span>
            <span className="text-sm text-gray-300">
              Stock: {product.stock}
            </span>
          </div>

          {getCartQuantity(product.id) > 0 && (
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-2 mb-3">
              <span className="text-yellow-300 text-sm">
                🛒 En carrito: {getCartQuantity(product.id)} unidades
              </span>
            </div>
          )}

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {product.stock === 0 ? "❌ Sin Stock" : "🛒 Agregar al Carrito"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
