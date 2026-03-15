// import { Link } from "react-router";
// import { Star, Download, ArrowRight } from "lucide-react";

// // Images Import
// import app1 from "../../public/assets/demo-app (1).webp";
// import app2 from "../../public/assets/demo-app (2).webp";
// import app3 from "../../public/assets/demo-app (3).webp";
// import app4 from "../../public/assets/demo-app (4).webp";
// import app5 from "../../public/assets/demo-app (5).webp";
// import app6 from "../../public/assets/demo-app (6).webp";

// const TrendingApps = () => {
//   const apps = [
//     { id: 1, title: "Snapchat", image: app1, downloads: "100M+", rating: 4.5 },
//     { id: 2, title: "Telegram", image: app2, downloads: "500M+", rating: 4.8 },
//     { id: 3, title: "Spotify", image: app3, downloads: "1B+", rating: 4.7 },
//     { id: 4, title: "Discord", image: app4, downloads: "100M+", rating: 4.6 },
//     { id: 5, title: "Pinterest", image: app5, downloads: "500M+", rating: 4.4 },
//     { id: 6, title: "LinkedIn", image: app6, downloads: "1B+", rating: 4.3 },
//     { id: 7, title: "WhatsApp", image: app1, downloads: "5B+", rating: 4.9 }, // Repeated for 8 cards
//     { id: 8, title: "Instagram", image: app2, downloads: "2B+", rating: 4.8 }, // Repeated for 8 cards
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Trending Apps
//           </h2>
//           <p className="text-gray-500 max-w-lg">
//             Explore All Trending Apps on the Market developed by us. High
//             quality and most downloaded apps of this month.
//           </p>
//         </div>

//         {/* Requirement: Show All Button */}
//         <Link
//           to="/apps"
//           className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
//         >
//           Show All{" "}
//           <ArrowRight
//             size={20}
//             className="group-hover:translate-x-1 transition-transform"
//           />
//         </Link>
//       </div>

//       {/* Requirement: 4-Column Layout Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {apps.map((app) => (
//           <Link
//             key={app.id}
//             to={`/app/${app.id}`} // Navigate to Details Page
//             className="bg-white border border-gray-100 p-5 rounded-[24px] hover:shadow-xl hover:border-blue-100 transition-all group"
//           >
//             {/* App Image */}
//             <div className="aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-50">
//               <img
//                 src={app.image}
//                 alt={app.title}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>

//             {/* App Title */}
//             <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//               {app.title}
//             </h3>

//             {/* Info Section (Downloads & Rating) */}
//             <div className="flex items-center justify-between border-t border-gray-50 pt-4">
//               <div className="flex items-center gap-1.5 text-gray-600">
//                 <Download size={16} className="text-blue-500" />
//                 <span className="text-sm font-medium">{app.downloads}</span>
//               </div>

//               <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full">
//                 <Star size={14} className="text-yellow-500 fill-yellow-500" />
//                 <span className="text-sm font-bold text-yellow-700">
//                   {app.rating}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrendingApps;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Star, Download, ArrowRight, Loader2 } from "lucide-react";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Requirement: Fetch data using async/await
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch("/apps.json"); // Public folder path
        const data = await response.json();
        // Requirement: Show only 8 apps
        setApps(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching apps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  // Helper function to format download numbers
  const formatDownloads = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B+";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K+";
    return num;
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Trending Apps
          </h2>
          <p className="text-gray-500 max-w-lg text-lg">
            Explore the most popular apps in the market, handpicked and
            developed for your digital needs.
          </p>
        </div>

        <Link
          to="/apps"
          className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all group"
        >
          Show All{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/* Grid Layout for 8 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {apps.map((app) => (
          <Link
            key={app.id}
            to={`/appDetails/${app.id}`}
            className="group bg-white border border-gray-100 p-6 rounded-[32px] hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* App Image */}
              <div className="aspect-square overflow-hidden rounded-[24px] mb-6 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* App Title & Company */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  {app.companyName}
                </p>
              </div>
            </div>

            {/* Download & Rating */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 bg-blue-50 rounded-lg">
                  <Download size={16} className="text-blue-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {formatDownloads(app.downloads)}
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-black text-yellow-700">
                  {app.ratingAvg}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingApps;
