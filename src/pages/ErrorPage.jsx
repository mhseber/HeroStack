import { useNavigate } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import errorImg from "../../public/assets/App-Error.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Error Image */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <img
            src={errorImg}
            alt="404 Error"
            className="w-full max-w-[320px] mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Error Content */}
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
