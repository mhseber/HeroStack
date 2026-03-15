import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      {/* Background Decor (Optional Figma-like soft circles) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Find and Install your <br className="hidden sm:block" />
          <span className="text-blue-600">Favorite Application</span>
        </h1>

        {/* Description / Sub-text */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          Explore a vast collection of apps across various categories.
          High-quality, secure, and user-rated applications at your fingertips.
        </p>

        {/* Requirement: Two Buttons (App Store & Play Store) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            <FaApple className="text-2xl" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-medium leading-none">
                Download on the
              </p>
              <p className="text-lg font-semibold leading-none">App Store</p>
            </div>
          </a>

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-900 px-8 py-3.5 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm active:scale-95"
          >
            <FaGooglePlay className="text-xl text-blue-600" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-medium leading-none">
                Get it on
              </p>
              <p className="text-lg font-semibold leading-none">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
