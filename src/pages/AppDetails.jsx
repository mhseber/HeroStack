import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Assets Import
import ratingIcon from "../../public/assets/icon-ratings.png";
import downloadsIcon from "../../public/assets/icon-downloads.png";
import reviewIcon from "../../public/assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const fetchAppDetail = async () => {
      try {
        const response = await fetch("/apps.json");
        const data = await response.json();
        const selectedApp = data.find((item) => item.id === parseInt(id));
        setApp(selectedApp);
      } catch (error) {
        console.error("Error fetching app details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAppDetail();
  }, [id]);

  const handleInstall = () => {
    setIsInstalled(true);
    toast.success(`${app.title} Installed Successfully!`, {
      style: {
        borderRadius: "16px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  if (loading)
    return (
      <div className="text-center py-20 font-bold">Loading Details...</div>
    );
  if (!app)
    return <div className="text-center py-20 font-bold">App not found!</div>;

  // Recharts data format
  const chartData = app.ratings.map((r) => ({
    name: r.name.split(" ")[0], // Star number
    count: r.count,
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors font-medium"
      >
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: App Image & Action */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 p-10 rounded-[48px] shadow-sm text-center">
            <div className="bg-gray-50 rounded-[40px] p-6 mb-6 inline-block shadow-inner">
              <img
                src={app.image}
                alt={app.title}
                className="w-40 h-40 object-contain rounded-[32px]"
              />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {app.title}
            </h1>
            <p className="text-blue-600 font-bold mb-8 uppercase tracking-wider text-sm">
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
                  {" "}
                  <CheckCircle size={24} /> Installed{" "}
                </>
              ) : (
                <>
                  {" "}
                  <Download size={24} /> Install Now{" "}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Stats & Description */}
        <div className="lg:col-span-2">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-gray-100 p-6 rounded-[32px] text-center shadow-sm">
              <div className="flex justify-center mb-3">
                <img src={ratingIcon} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-xs text-gray-400 uppercase font-black mb-1">
                Avg Rating
              </p>
              <p className="text-gray-900 font-black text-xl">
                {app.ratingAvg}
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-[32px] text-center shadow-sm">
              <div className="flex justify-center mb-3">
                <img src={downloadsIcon} alt="downloads" className="w-8 h-8" />
              </div>
              <p className="text-xs text-gray-400 uppercase font-black mb-1">
                Downloads
              </p>
              <p className="text-gray-900 font-black text-xl">
                {(app.downloads / 1000000).toFixed(0)}M+
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-[32px] text-center shadow-sm">
              <div className="flex justify-center mb-3">
                <img src={reviewIcon} alt="reviews" className="w-8 h-8" />
              </div>
              <p className="text-xs text-gray-400 uppercase font-black mb-1">
                Reviews
              </p>
              <p className="text-gray-900 font-black text-xl">
                {(app.reviews / 1000).toFixed(0)}K
              </p>
            </div>
          </div>

          {/* Recharts Review Section */}
          <div className="bg-gray-900 text-white p-10 rounded-[48px] mb-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              Ratings & Reviews{" "}
              <span className="text-gray-500 text-lg">({app.ratingAvg}/5)</span>
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 14 }}
                  />
                  <Bar dataKey="count" radius={[10, 10, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 4 ? "#fbbf24" : "#374151"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-400 px-2">
              <span>1 Star</span>
              <span>2 Star</span>
              <span>3 Star</span>
              <span>4 Star</span>
              <span>5 Star</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white border border-gray-100 p-10 rounded-[48px] shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 underline decoration-blue-500 underline-offset-8">
              About this App
            </h2>
            <p className="text-gray-600 leading-[1.8] text-lg font-medium">
              {app.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
