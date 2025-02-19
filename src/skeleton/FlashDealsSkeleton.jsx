
const FlashDealsSkeleton = () => {
    return (
      <div className="mb-12">
        {/* Flash Deals Header Skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-300 p-4 rounded-lg shadow-lg mb-4 animate-pulse">
          <div className="h-6 w-32 bg-gray-400 rounded"></div>
          <div className="h-8 w-40 bg-gray-400 rounded"></div>
        </div>
  
        {/* Flash Deals Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg animate-pulse">
              <div className="h-48 w-full bg-gray-300 mb-4 rounded-md"></div>
              <div className="h-6 w-3/4 bg-gray-400 mb-2 rounded"></div>
              <div className="flex justify-between items-center mt-2">
                <div className="h-6 w-16 bg-gray-400 rounded"></div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FlashDealsSkeleton;
  