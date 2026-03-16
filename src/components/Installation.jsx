// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { Trash2, ExternalLink, Download } from "lucide-react";
// import toast, { Toaster } from "react-hot-toast";

// const Installation = () => {
//   const [installedApps, setInstalledApps] = useState([]);

//   // LocalStorage theke data load kora
//   useEffect(() => {
//     const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     setInstalledApps(savedApps);
//   }, []);

//   // Uninstall Logic
//   const handleUninstall = (id, title) => {
//     const updatedApps = installedApps.filter((app) => app.id !== id);
//     setInstalledApps(updatedApps);
//     localStorage.setItem("installedApps", JSON.stringify(updatedApps));

//     toast.error(`${title} Uninstalled Successfully!`, {
//       style: {
//         borderRadius: "16px",
//         background: "#333",
//         color: "#fff",
//       },
//     });
//   };

//   return (
//     <section className="bg-[#F8FAFC] min-h-screen pb-20">
//       <Toaster position="top-center" />

//       {/* Page Header */}
//       <div className="bg-white border-b border-gray-100 py-16 mb-10">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-black text-gray-900 mb-2">
//             My <span className="text-blue-600">Installations</span>
//           </h1>
//           <p className="text-gray-500 font-medium">
//             Manage all the applications you have installed on your account.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {installedApps.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {installedApps.map((app) => (
//               <div
//                 key={app.id}
//                 className="bg-white p-6 rounded-[32px] border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-all group"
//               >
//                 {/* App Icon */}
//                 <div className="w-24 h-24 bg-gray-50 rounded-[24px] p-4 flex-shrink-0">
//                   <img
//                     src={app.image}
//                     alt={app.title}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* App Info */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-xl font-bold text-gray-900 truncate">
//                     {app.title}
//                   </h3>
//                   <p className="text-xs text-gray-400 font-black uppercase mb-4 tracking-tighter">
//                     {app.companyName}
//                   </p>

//                   {/* Action Buttons */}
//                   <div className="flex items-center gap-3">
//                     <Link
//                       to={`/appDetails/${app.id}`}
//                       className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
//                     >
//                       <ExternalLink size={18} />
//                     </Link>

//                     <button
//                       onClick={() => handleUninstall(app.id, app.title)}
//                       className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all font-bold text-sm"
//                     >
//                       <Trash2 size={18} /> Uninstall
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
//             <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Download size={32} className="text-gray-300" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">
//               No Apps Installed Yet
//             </h2>
//             <p className="text-gray-500 mt-2 mb-8 text-sm">
//               Explore our market and install your favorite apps.
//             </p>
//             <Link
//               to="/apps"
//               className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
//             >
//               Browse Apps
//             </Link>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Installation;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Trash2, ExternalLink, Download, ArrowUpDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState(""); // Sorting State

  // LocalStorage theke data load kora
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(savedApps);
  }, []);

  // Uninstall Logic
  const handleUninstall = (id, title) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.error(`${title} Uninstalled Successfully!`, {
      style: { borderRadius: "16px", background: "#333", color: "#fff" },
    });
  };

  // --- Requirement: Sort by Downloads Logic ---
  const sortedInstalledApps = [...installedApps].sort((a, b) => {
    if (sortBy === "high-to-low") return b.downloads - a.downloads;
    if (sortBy === "low-to-high") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <section className="bg-[#F8FAFC] min-h-screen pb-20">
      <Toaster position="top-center" />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              My <span className="text-blue-600">Installations</span>
            </h1>
            <p className="text-gray-500 font-medium">
              Manage your installed applications and sort them as you wish.
            </p>
          </div>

          {/* Sorting Dropdown - Requirement */}
          <div className="relative">
            <ArrowUpDown
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-56 pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 appearance-none focus:ring-4 focus:ring-blue-50 outline-none cursor-pointer shadow-sm transition-all hover:border-blue-300"
            >
              <option value="">Sort by Downloads</option>
              <option value="high-to-low">High-Low</option>
              <option value="low-to-high">Low-High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {sortedInstalledApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedInstalledApps.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 rounded-[32px] border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-[24px] p-4 flex-shrink-0">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 truncate">
                    {app.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-black uppercase mb-4 tracking-tighter">
                    Downloads: {(app.downloads / 1000000).toFixed(0)}M+
                  </p>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/appDetails/${app.id}`}
                      className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </Link>
                    <button
                      onClick={() => handleUninstall(app.id, app.title)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all font-bold text-sm"
                    >
                      <Trash2 size={18} /> Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download size={32} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              No Apps Installed
            </h2>
            <Link
              to="/apps"
              className="mt-4 inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold"
            >
              Browse Market
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Installation;
