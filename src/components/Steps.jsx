import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all group">
            <div className="flex justify-end mb-10">
              <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                01
              </div>
            </div>

            <div className="w-28 h-28 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
              <img 
                src={userImg} 
                alt="Create Account" 
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Create Account</h3>
            <p className="text-gray-600 leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all group">
            <div className="flex justify-end mb-10">
              <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                02
              </div>
            </div>

            <div className="w-28 h-28 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
              <img 
                src={packageImg} 
                alt="Choose Products" 
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Choose Products</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all group">
            <div className="flex justify-end mb-10">
              <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                03
              </div>
            </div>

            <div className="w-28 h-28 mx-auto bg-violet-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
              <img 
                src={rocketImg} 
                alt="Start Creating" 
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Start Creating</h3>
            <p className="text-gray-600 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Steps;