const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section - Logo & Description */}
          <div className="max-w-xs">
            <h2 className="text-4xl font-bold tracking-tight mb-4">DigiTools</h2>
            <p className="text-neutral-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10">
            {/* Product */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Social Links</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/20 transition-colors">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="X" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <div>© 2026 Digitools. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;