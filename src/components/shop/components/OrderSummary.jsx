const OrderSummary = ({ cart, totalItems, totalPrice }) => {
  const categories = cart.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.quantity;
    return acc;
  }, {});

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">📊 Resumen</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Artículos totales:</span>
          <span className="text-white font-semibold">{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-300">Productos únicos:</span>
          <span className="text-white font-semibold">{cart.length}</span>
        </div>

        {Object.entries(categories).map(([category, count]) => (
          <div key={category} className="flex justify-between">
            <span className="text-gray-300">
              {category === "electronics" ? "💻 Electrónicos" : "👕 Ropa"}:
            </span>
            <span className="text-white font-semibold">{count}</span>
          </div>
        ))}

        <div className="border-t border-white/20 pt-2 mt-4">
          <div className="flex justify-between font-bold">
            <span className="text-white">Total a pagar:</span>
            <span className="text-green-400 text-lg">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
