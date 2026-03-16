import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Download, CheckCircle, AlertCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

// Assets Import
import ratingIcon from "../../public/assets/icon-ratings.png";
import downloadsIcon from "../../public/assets/icon-downloads.png";
import reviewIcon from "../../public/assets/icon-review.png";
import Loader from "../components/Loader";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const fetchAppDetail = async () => {
      try {
        setLoading(true); // Challenge: Show loading during page load
        const response = await fetch("/apps.json");
        const data = await response.json();

        // URL id string thake, tai parseInt diye JSON id-r sathe match kora
        const selectedApp = data.find((item) => item.id === parseInt(id));
        setApp(selectedApp);
      } catch (error) {
        console.error("Error fetching app details:", error);
      } finally {
        // Halka delay deya jate loading animation-ta user dekhte pay (Optional)
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchAppDetail();
  }, [id]);

  const handleInstall = () => {
    // 1. LocalStorage theke purano data ana
    const existingApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    // 2. Notun app add kora
    const updatedApps = [...existingApps, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    setIsInstalled(true);
    toast.success(`${app.title} Installed Successfully!`);
  };

  // Check if already installed on page load
  useEffect(() => {
    const existingApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isFound = existingApps.some((item) => item.id === parseInt(id));
    if (isFound) setIsInstalled(true);
  }, [id]);

  // 1. Requirement: Show loading animation during page navigation/load
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <Loader />
      </div>
    );
  }

  // 2. Requirement: Show a Relevant Not Found message if app doesn't exist
  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 shadow-inner animate-pulse">
          <AlertCircle size={48} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          Relevant Not Found!
        </h2>
        <p className="text-gray-500 max-w-sm mb-10 font-medium">
          The application you are looking for might have been removed or the
          link is broken.
        </p>
        <Link
          to="/apps"
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          <ArrowLeft size={20} />
          Back to All Apps
        </Link>
      </div>
    );
  }

  // Recharts data format logic
  const chartData = app.ratings.map((r) => ({
    name: r.name.split(" ")[0],
    count: r.count,
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Modern Back Button */}
      <Link
        to="/apps"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 mb-10 transition-colors font-bold text-xs uppercase tracking-[0.2em]"
      >
        <ArrowLeft size={18} /> Back to Market
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: App Identity Card (Sticky) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 p-10 rounded-[48px] shadow-sm text-center sticky top-28">
            <div className="bg-gray-50 rounded-[40px] p-6 mb-8 inline-block shadow-inner">
              <img
                src={app.image}
                alt={app.title}
                className="w-40 h-40 object-contain rounded-[32px] drop-shadow-2xl"
              />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {app.title}
            </h1>
            <p className="text-blue-600 font-bold mb-10 uppercase tracking-widest text-sm">
              {app.companyName}
            </p>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`w-full py-5 rounded-3xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-lg 
              ${
                isInstalled
                  ? "bg-green-100 text-green-600 cursor-not-allowed border-2 border-green-200"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200"
              }`}
            >
              {isInstalled ? (
                <>
                  <CheckCircle size={26} /> Installed
                </>
              ) : (
                <>
                  <Download size={26} /> Install Now
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Detailed Stats & Content */}
        <div className="lg:col-span-2">
          {/* 3-Column Stats Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            {[
              {
                label: "Avg Rating",
                value: `${app.ratingAvg}`,
                icon: ratingIcon,
              },
              {
                label: "Downloads",
                value: `${(app.downloads / 1000000).toFixed(0)}M+`,
                icon: downloadsIcon,
              },
              {
                label: "Reviews",
                value: `${(app.reviews / 1000).toFixed(0)}K`,
                icon: reviewIcon,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-[36px] text-center shadow-sm hover:border-blue-100 transition-colors"
              >
                <div className="flex justify-center mb-3">
                  <img src={stat.icon} alt={stat.label} className="w-9 h-9" />
                </div>
                <p className="text-[10px] text-gray-400 uppercase font-black mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-900 font-black text-xl md:text-2xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Review Chart Section (Modern Dark Look) */}
          <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[48px] mb-12 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold">Ratings & Reviews</h3>
              <div className="bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
                <span className="text-yellow-400 font-bold">
                  ★ {app.ratingAvg}
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 13, fontWeight: "bold" }}
                  />
                  <Bar dataKey="count" radius={[12, 12, 0, 0]} barSize={45}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 4 ? "#3b82f6" : "#1f2937"} // 5 star blue highlight
                        className="hover:fill-blue-400 transition-all duration-300"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-6 text-[10px] text-gray-500 font-black uppercase tracking-widest px-4">
              <span>Low Performance</span>
              <span>High Satisfaction</span>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white border border-gray-100 p-10 rounded-[48px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              About this Application
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 leading-[1.8] text-lg font-medium relative z-10">
              {app.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
