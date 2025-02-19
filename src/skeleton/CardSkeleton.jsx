const CardSkeleton = () => {
    return (
      <div className="max-w-sm border p-4 rounded-lg shadow-md bg-white animate-pulse">
        {/* Image Skeleton */}
        <div className="h-48 w-full bg-gray-300 rounded-lg"></div>
  
        {/* Title Skeleton */}
        <div className="h-5 w-3/4 bg-gray-300 rounded mt-4"></div>
  
        {/* Price Skeleton */}
        <div className="h-4 w-1/4 bg-gray-300 rounded mt-2"></div>
  
        {/* Buttons Skeleton */}
        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <div className="h-10 w-full bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default CardSkeleton;
  