// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { Search, Download, Star, LayoutGrid, AlertCircle } from "lucide-react";

// const Apps = () => {
//   const [apps, setApps] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Async/Await logic for fetching data
//   useEffect(() => {
//     const fetchApps = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("/apps.json");

//         if (!res.ok) {
//           throw new Error(
//             "Failed to load application data. Please try again later.",
//           );
//         }

//         const data = await res.json();
//         setApps(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApps();
//   }, []);

//   // Live Search Logic (Case-insensitive)
//   const filteredApps = apps.filter((app) =>
//     app.title.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   // Loading State UI
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh]">
//         <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//         <p className="mt-4 text-gray-500 font-medium">
//           Loading applications...
//         </p>
//       </div>
//     );
//   }

//   // Error State UI
//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
//         <AlertCircle size={48} className="text-red-500 mb-4" />
//         <h2 className="text-2xl font-bold text-gray-900">
//           Oops! Something went wrong
//         </h2>
//         <p className="text-gray-500 mt-2">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-[#F8FAFC] min-h-screen pb-20">
//       {/* 1. Title Section */}
//       <div className="bg-white border-b border-gray-100 py-16 mb-10">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
//             Our All <span className="text-blue-600">Applications</span>
//           </h1>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto">
//             Explore All Apps on the Market developed by us. We build digital
//             experiences for millions of users worldwide.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {/* 2. Search and States Bar */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
//           <div className="flex items-center gap-2">
//             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shadow-sm">
//               <LayoutGrid size={20} />
//             </div>
//             <p className="text-gray-600 font-semibold">
//               Showing{" "}
//               <span className="text-gray-900">{filteredApps.length}</span>{" "}
//               Applications
//             </p>
//           </div>

//           <div className="relative w-full md:w-96 group">
//             <Search
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
//               size={20}
//             />
//             <input
//               type="text"
//               placeholder="Search apps by title..."
//               className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* 3. App Section (Grid) */}
//         {filteredApps.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {filteredApps.map((app) => (
//               <Link
//                 key={app.id}
//                 to={`/appDetails/${app.id}`}
//                 className="group bg-white p-6 rounded-[32px] border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-300 flex flex-col"
//               >
//                 {/* App Image container */}
//                 <div className="w-full aspect-square bg-gray-50 rounded-[24px] p-6 mb-6 flex items-center justify-center group-hover:bg-blue-50/50 transition-colors">
//                   <img
//                     src={app.image}
//                     alt={app.title}
//                     className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* App Info */}
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
//                     {app.title}
//                   </h3>
//                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">
//                     {app.companyName}
//                   </p>

//                   {/* Rating & Downloads */}
//                   <div className="flex items-center justify-between py-3 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5">
//                       <div className="bg-yellow-100 p-1 rounded-md">
//                         <Star
//                           size={14}
//                           className="text-yellow-600 fill-yellow-600"
//                         />
//                       </div>
//                       <span className="text-sm font-bold text-gray-700">
//                         {app.ratingAvg}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-1.5">
//                       <div className="bg-blue-100 p-1 rounded-md">
//                         <Download size={14} className="text-blue-600" />
//                       </div>
//                       <span className="text-sm font-bold text-gray-700">
//                         {app.downloads >= 1000000000
//                           ? `${(app.downloads / 1000000000).toFixed(1)}B+`
//                           : `${(app.downloads / 1000000).toFixed(0)}M+`}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           /* 4. No App Found Message */
//           <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100 shadow-inner">
//             <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Search size={40} className="text-gray-300" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">
//               No App Found
//             </h2>
//             <p className="text-gray-500">
//               Sorry, we couldn't find any application matching "
//               <span className="font-semibold text-gray-800">{searchTerm}</span>"
//             </p>
//             <button
//               onClick={() => setSearchTerm("")}
//               className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200"
//             >
//               Show All Apps
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Apps;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Search,
  Download,
  Star,
  LayoutGrid,
  AlertCircle,
  ArrowUpDown,
} from "lucide-react";
import Loader from "./Loader";

// import Loader from "../components/Loader";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setLoading(true);
        const res = await fetch("/apps.json");
        if (!res.ok) throw new Error("Failed to load application data.");
        const data = await res.json();
        setApps(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  // Search Loading Effect
  useEffect(() => {
    if (searchTerm) {
      setSearchLoading(true);
      const timer = setTimeout(() => setSearchLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  // Combined Filter & Sort Logic
  // Ekhane sortedApps variable-ti sorasori render-er somoy calculation hobe
  const getProcessedApps = () => {
    let filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (sortBy === "high-to-low") {
      return filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "low-to-high") {
      return filtered.sort((a, b) => a.downloads - b.downloads);
    }
    return filtered;
  };

  const finalApps = getProcessedApps();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-500 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="bg-white border-b border-gray-100 py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our All <span className="text-blue-600">Applications</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Explore premium experiences developed for millions of users
            worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-100">
              <LayoutGrid size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-black uppercase tracking-widest">
                Market Stats
              </p>
              <p className="text-gray-900 font-bold">
                Showing{" "}
                <span className="text-blue-600">{finalApps.length}</span> Apps
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Sorting Dropdown */}
            <div className="relative">
              <ArrowUpDown
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={18}
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-56 pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-[20px] font-bold text-gray-700 appearance-none focus:ring-4 focus:ring-blue-50 outline-none cursor-pointer shadow-sm transition-all hover:border-blue-300"
              >
                <option value="">Sort by Downloads</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-96 group">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${searchLoading ? "text-blue-500 animate-pulse" : "text-gray-400"}`}
                size={20}
              />
              <input
                type="text"
                placeholder="Search apps..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all shadow-sm font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {searchLoading ? (
          <div className="py-20 flex justify-center">
            <Loader />
          </div>
        ) : finalApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {finalApps.map((app) => (
              <Link
                key={app.id}
                to={`/appDetails/${app.id}`}
                className="group bg-white p-6 rounded-[40px] border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/40 transition-all duration-500 flex flex-col"
              >
                <div className="w-full aspect-square bg-gray-50 rounded-[32px] p-6 mb-6 flex items-center justify-center group-hover:bg-blue-50/50 transition-colors relative overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">
                    {app.companyName}
                  </p>
                  <div className="flex items-center justify-between py-3 border-t border-gray-50">
                    <div className="flex items-center gap-1.5 font-bold text-gray-700">
                      <Star
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-gray-500">
                      <Download size={16} />
                      <span>
                        {app.downloads >= 1000000
                          ? `${(app.downloads / 1000000).toFixed(0)}M+`
                          : `${app.downloads}`}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[48px] border-2 border-dashed border-gray-100 shadow-inner">
            <Search size={40} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              No Results Found
            </h2>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
