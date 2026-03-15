import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import {
  Star,
  Download,
  ArrowLeft,
  ShieldCheck,
  Globe,
  Share2,
} from "lucide-react";

const AppDetails = () => {
  const { id } = useParams(); // URL theke id ta neya
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppDetail = async () => {
      try {
        const response = await fetch("/apps.json");
        const data = await response.json();
        // ID onujayi specific app khuje ber kora
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

  if (loading)
    return (
      <div className="text-center py-20 font-bold">Loading Details...</div>
    );
  if (!app)
    return <div className="text-center py-20 font-bold">App not found!</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: Image & Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 p-8 rounded-[40px] shadow-sm text-center">
            <img
              src={app.image}
              alt={app.title}
              className="w-48 h-48 mx-auto object-contain rounded-[32px] mb-6 shadow-lg"
            />
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {app.title}
            </h1>
            <p className="text-blue-600 font-semibold mb-6">
              {app.companyName}
            </p>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              <Download size={20} /> Install Now
            </button>
          </div>
        </div>

        {/* Right Side: Description & Stats */}
        <div className="lg:col-span-2">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Rating
              </p>
              <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                {app.ratingAvg}{" "}
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Size
              </p>
              <p className="text-gray-900 font-bold">{app.size} MB</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl text-center">
              <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                Reviews
              </p>
              <p className="text-gray-900 font-bold">
                {(app.reviews / 1000).toFixed(0)}K
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About this App
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {app.description}
            </p>
          </div>

          {/* Rating Chart Area */}
          <div className="bg-gray-900 text-white p-8 rounded-[32px]">
            <h3 className="text-xl font-bold mb-6">Ratings & Reviews</h3>
            <div className="space-y-4">
              {app.ratings
                .slice()
                .reverse()
                .map((r, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="text-sm font-medium w-12">{r.name}</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400"
                        style={{ width: `${(r.count / app.reviews) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 w-12 text-right">
                      {((r.count / app.reviews) * 100).toFixed(0)}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDetails;
