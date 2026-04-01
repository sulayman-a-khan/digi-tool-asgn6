const Stats = () => {
  return (
    <div className="bg-violet-700 py-16 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

          {/* Stat 1 */}
          <div className="text-center flex-1">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">50K+</div>
            <div className="mt-3 text-lg opacity-90">Active Users</div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-20 bg-white/30"></div>

          {/* Stat 2 */}
          <div className="text-center flex-1">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">200+</div>
            <div className="mt-3 text-lg opacity-90">Premium Tools</div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-20 bg-white/30"></div>

          {/* Stat 3 */}
          <div className="text-center flex-1">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">4.9</div>
            <div className="mt-3 text-lg opacity-90">Rating</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;