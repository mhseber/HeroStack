const Loader = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-blue-600 font-bold text-sm">Loading...</p>
    </div>
  );
};

export default Loader;
