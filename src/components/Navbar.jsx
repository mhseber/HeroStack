import { Link, NavLink } from "react-router";
// Icons
import { Home, Smartphone, DownloadCloud, Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import logo from "../../public/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu (Dropdown for small devices) */}
          <div className="flex md:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost p-1">
                <Menu className="h-6 w-6 text-gray-600" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow-xl border border-gray-100 space-y-2"
              >
                <li>
                  <NavLink to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/installation"
                    className="flex items-center gap-2"
                  >
                    <DownloadCloud className="w-4 h-4" /> Installation
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo Section - Navigates to Home */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="overflow-hidden rounded-lg group-hover:scale-110 transition-transform duration-300">
              {/* Image Logo */}
              <img
                src={logo}
                alt="HeroStack Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Hero<span className="text-blue-600">Stack</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`
              }
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`
              }
            >
              <Smartphone className="w-4 h-4" />
              <span>Apps</span>
            </NavLink>

            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `flex items-center gap-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`
              }
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Installation</span>
            </NavLink>
          </div>

          {/* Contribution Button */}
          <div className="flex items-center">
            <a
              href="https://github.com/mhseber/HeroStack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all active:scale-95"
            >
              <FaGithub className="text-lg" />
              <span className="hidden sm:inline">Contribution</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
