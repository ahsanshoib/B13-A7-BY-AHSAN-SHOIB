const LoadingSpinner = () => {

  return (
    <div className="flex flex-col items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#1D4539] rounded-full animate-spin mb-4"></div>
    <p className="text-gray-500 font-medium animate-pulse">Loading friends...</p>
    </div>
  );
};

export default LoadingSpinner;