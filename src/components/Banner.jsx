import bannerImg from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="min-h-screen bg-white flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            
            {/* New Tag */}
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-5 py-2.5 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
              New: AI-Powered Tools Available
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supercharge Your<br />
              Digital Workflow
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-lg">
              Access premium AI tools, design assets, templates, and productivity 
              software—all in one place. Start creating faster today.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="btn btn-primary text-lg px-10 py-3 rounded-full bg-violet-600 hover:bg-violet-700 border-none"
              >
                Explore Products
              </button>
              
              <button 
                className="btn btn-outline text-lg px-10 py-3 rounded-full border-2 border-violet-600 text-violet-600 hover:bg-violet-50"
              >
                ▶ Watch Demo
              </button>
            </div>

        
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={bannerImg} 
              alt="Supercharge Your Digital Workflow" 
              className="rounded-3xl shadow-2xl w-full max-w-130 lg:max-w-none"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;