import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, checkout }) => {
  // Calculate total directly
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  // Icon mapping (same as Products.jsx)
  const iconMap = {
    1: "./src/assets/products/writing_2327400 1.png",   // AI Writing Pro
    2: "./src/assets/products/design-tool.png",         // Design Templates Pack
    3: "./src/assets/products/portfolio.png",
    4: "./src/assets/products/operation.png",
    5: "./src/assets/products/social-media.png",
    // Add more mappings if needed
  };

  const handleRemove = (id, name) => {
    removeItem(id);
    toast.error(`${name} removed from cart`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    checkout();
    toast.success("Checkout successful! Thank you for your purchase.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Main Cart Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
          
          {/* Your Cart Title */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">Your Cart</h2>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="py-24 text-center text-gray-500 text-lg">
                Your cart is empty
              </div>
            ) : (
              cart.map((item) => {
                const iconSrc = iconMap[item.id];

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 px-8 py-7 hover:bg-gray-50 transition-colors"
                  >
                    {/* Icon - Same style as Products.jsx */}
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100 shrink-0">
                      {iconSrc ? (
                        <img 
                          src={iconSrc} 
                          alt={item.name} 
                          className="w-11 h-11 object-contain"
                        />
                      ) : (
                        <span className="text-4xl">{item.icon}</span>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-[17px]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl font-bold text-gray-900">
                          ${item.price}
                        </span>
                        {item.period && (
                          <span className="text-gray-500 text-sm">/{item.period}</span>
                        )}
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id, item.name)}
                      className="text-rose-500 hover:text-rose-600 font-medium text-sm transition-colors px-4 py-2"
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Total & Checkout Section */}
          {cart.length > 0 && (
            <div className="p-8 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg text-gray-600">Total:</span>
                <span className="text-3xl font-bold text-gray-900">
                  ${total}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 
                           transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-md"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart; 