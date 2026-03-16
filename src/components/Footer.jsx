import logo from "../../public/assets/logo.png";
import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Mail,
  ShieldCheck,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black bg-white rounded-2xl pl-8 border-b-blue-700 border shadow-2xl shadow-blue-500 p-2 flex items-center gap-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Hero<span className="text-blue-600">Stack</span>
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Discover and download the best mobile applications in one place.
              Your trusted source for safe and verified apps.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-white transition-colors">
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-white transition-colors"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Trending Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@herostack.com
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={16} /> Privacy Policy
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} /> Terms of Service
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get notified about new app releases.
            </p>
            <div className="flex bg-gray-800 p-1.5 rounded-xl border border-gray-700">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none outline-none px-3 w-full text-sm text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 HeroStack. Developed with ❤️ by MH.SEBER.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-1 cursor-pointer hover:text-white">
              <Globe size={14} /> English (US)
            </span>
            <span className="cursor-pointer hover:text-white">
              Cookies Setting
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
