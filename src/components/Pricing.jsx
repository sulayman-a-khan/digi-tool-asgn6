const Pricing = () => {
  return (
    <div className="bg-white py-20 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-500 mb-8">Perfect for getting started</p>

            <div className="mb-10">
              <span className="text-6xl font-bold">$0</span>
              <span className="text-2xl text-gray-500">/Month</span>
            </div>

            <ul className="space-y-1 mb-12 grow">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Basic templates
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Community support
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>1 project per
                month
              </li>
            </ul>

            <button className="bg-violet-600 hover:bg-violet-700 text-white w-full py-4 rounded-2xl text-lg font-semibold mt-auto transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-linear-to-br from-violet-600 to-purple-600 rounded-3xl p-10 flex flex-col relative scale-105 shadow-2xl border-2 border-violet-400">
            {/* Most Popular Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 font-bold px-6 py-1.5 rounded-full text-sm">
              Most Popular
            </div>

            <h3 className="text-3xl font-semibold mb-2 text-white">Pro</h3>
            <p className="text-violet-200 mb-8">Best for professionals</p>

            <div className="mb-10">
              <span className="text-6xl font-bold text-white">$29</span>
              <span className="text-2xl text-violet-200">/Month</span>
            </div>

            <ul className="space-y-1 mb-12 grow text-white">
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Access to all premium tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Unlimited templates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Priority support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Unlimited projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Cloud sync
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white text-xl">✔</span>
                Advanced analytics
              </li>
            </ul>

            <button className="bg-white text-violet-700 hover:bg-gray-100 w-full py-4 rounded-2xl text-lg font-semibold mt-auto transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-8">For teams and businesses</p>

            <div className="mb-10">
              <span className="text-6xl font-bold">$99</span>
              <span className="text-2xl text-gray-500">/Month</span>
            </div>

            <ul className="space-y-1 mb-12 grow">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Team collaboration
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Custom integrations
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Dedicated support
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="text-green-500 text-xl">✔</span>
                Custom branding
              </li>
            </ul>

            <button className="bg-violet-600 hover:bg-violet-700 text-white w-full py-4 rounded-2xl text-lg font-semibold mt-auto transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
