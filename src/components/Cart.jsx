import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, checkout }) => {
  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-3 shadow mb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>

              <button
                className="btn btn-error btn-sm"
                onClick={() => {
                  removeItem(item.id);
                  toast.error("Removed");
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="btn btn-success w-full mt-4"
            onClick={() => {
              checkout();
              toast.info("Checkout Done");
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;