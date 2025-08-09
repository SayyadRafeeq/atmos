const Loader = () => {
  return (
    // Container to center the loader vertically on the screen
    <div className="flex items-center justify-center h-screen">
      {/* Container for the loader animation */}
      <div className="relative">
        {/* Outer circle of the loader */}
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        {/* Inner circle of the loader with spinning animation */}
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-indigo-400 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
