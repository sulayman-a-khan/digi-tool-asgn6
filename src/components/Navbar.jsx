const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-violet-600">
          DigiTools
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        {/* Right Side - Cart, Login, Get Started */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:text-violet-600 transition-colors relative">
            🛒 
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <button className="hidden md:block text-base font-medium hover:text-violet-600 transition-colors">
            Login
          </button>

          <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none px-8 rounded-full text-base font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;