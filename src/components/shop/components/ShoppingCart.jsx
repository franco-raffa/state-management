const ShoppingCart = ({
  cart,
  totalItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">🛒 Carrito</h2>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {totalItems}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <p className="text-lg">🛒 Carrito vacío</p>
          <p className="text-sm">Agrega algunos productos</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white text-sm">
                    {item.name}
                  </h4>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    ❌
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded text-white text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="text-white font-bold mx-2 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded text-white text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-green-400 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-bold">Total:</span>
              <span className="text-2xl font-bold text-green-400">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={onClearCart}
              className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold text-white transition-colors"
            >
              🗑️ Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ShoppingCart;
