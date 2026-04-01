import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import data from "./data/products.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Banner />

      <Stats />

      {/* Toggle Buttons */}
    {/* Premium Digital Tools Toggle Section - Light & Clean */}
<div className="bg-white py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">
    
    <h2 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">
      Premium Digital Tools
    </h2>
    
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      Choose from our curated collection of premium digital products designed 
      to boost your productivity and creativity.
    </p>

    {/* Pill Toggle Button - Light Style */}
    <div className="inline-flex bg-gray-100 p-2 rounded-full shadow-inner">
      
      <button
        onClick={() => setShowCart(false)}
        className={`px-12 py-4 text-lg font-semibold rounded-full transition-all ${
          !showCart 
            ? "bg-violet-600 text-white shadow-md" 
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        Products
      </button>
      
      <button
        onClick={() => setShowCart(true)}
        className={`px-12 py-4 text-lg font-semibold rounded-full transition-all ${
          showCart 
            ? "bg-violet-600 text-white shadow-md" 
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        Cart ({cart.length})
      </button>
    </div>

  </div>
</div>

      {showCart ? (
        <Cart cart={cart} removeItem={removeItem} checkout={checkout} />
      ) : (
        <Products products={data} addToCart={addToCart} />
      )}

      {!showCart && (
        <>
          <Steps />
          <Pricing />
        </>
      )}

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;