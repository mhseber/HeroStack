import { DownloadCloud, Star, Smartphone, Rocket, Zap } from "lucide-react";
import banner from "../../public/assets/hero.png";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* 1. Image/Banner Section */}
      <div className="flex justify-center  px-4">
        <img
          src={banner}
          alt="App Showcase"
          className="w-full max-w-5xl h-auto object-contain rounded-3xl"
        />
      </div>

      {/* 2. States Section (Enhanced with Background Icons) */}
      <section className="bg-purple-600 rounded-[40px] p-10 md:p-20 text-white overflow-hidden relative">
        {/* --- Background Floating Icons --- */}
        <div className="absolute top-10 left-10 opacity-10 rotate-12 animate-bounce">
          <Rocket size={80} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 -rotate-12">
          <DownloadCloud size={100} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5 rotate-45 hidden md:block">
          <Star size={60} />
        </div>
        <div className="absolute top-20 right-1/4 opacity-10 animate-pulse hidden md:block">
          <Zap size={50} />
        </div>
        <div className="absolute -bottom-5 left-1/2 opacity-10">
          <Smartphone size={120} />
        </div>
        {/* ------------------------------- */}

        {/* Content (Relative to stay above background icons) */}
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Trusted by Millions, <br className="md:hidden" /> Built for You
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Card 1: Total Downloads */}
            <div className="text-center border-b md:border-b-0 md:border-r border-purple-400/50 pb-8 md:pb-0 last:border-0">
              <p className="text-purple-100 text-sm font-medium mb-2 uppercase tracking-wider">
                Total Downloads
              </p>
              <h3 className="text-5xl md:text-7xl font-black mb-3 italic tracking-tighter">
                29.6M
              </h3>
              <p className="text-purple-200 text-sm flex items-center justify-center gap-1">
                <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded text-xs font-bold">
                  ↑ 21%
                </span>
                more than last month
              </p>
            </div>

            {/* Card 2: Total Reviews */}
            <div className="text-center border-b md:border-b-0 md:border-r border-purple-400/50 pb-8 md:pb-0 last:border-0">
              <p className="text-purple-100 text-sm font-medium mb-2 uppercase tracking-wider">
                Total Reviews
              </p>
              <h3 className="text-5xl md:text-7xl font-black mb-3 italic tracking-tighter">
                906K
              </h3>
              <p className="text-purple-200 text-sm flex items-center justify-center gap-1">
                <span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded text-xs font-bold">
                  ↑ 46%
                </span>
                more than last month
              </p>
            </div>

            {/* Card 3: Active Apps */}
            <div className="text-center">
              <p className="text-purple-100 text-sm font-medium mb-2 uppercase tracking-wider">
                Active Apps
              </p>
              <h3 className="text-5xl md:text-7xl font-black mb-3 italic tracking-tighter">
                132+
              </h3>
              <p className="text-purple-200 text-sm">
                <span className="font-bold text-yellow-300">31</span> more will
                Launch
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
