import Countdown from "react-countdown";
import FlashDealsSkeleton from "../skeleton/FlashDealsSkeleton";

const FlashDeals = ({ featured }) => {
  if (!featured || featured.length === 0) {
    return <FlashDealsSkeleton />;
  }
  return (
    <div className="mb-12">
      {/* Flash Deals Header with Timer */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-600 text-white p-4 rounded-lg shadow-lg mb-4">
        <h2 className="text-2xl font-bold">Flash Deals</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg">Ending in:</span>
          <Countdown
            date={Date.now() + 86400000}
            renderer={({ hours, minutes, seconds }) => (
              <span className="text-xl font-bold bg-white text-red-600 px-4 py-1 rounded-lg">
                {hours}h {minutes}m {seconds}s
              </span>
            )}
          />
        </div>
      </div>

      {/* Flash Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featured.slice(0, 4).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover mb-4 rounded-md"
            />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-red-600 font-semibold text-xl">${product.price}</span>
              <div className="text-sm bg-gray-200 p-2 rounded-md">
                <Countdown
                  date={Date.now() + 86400000}
                  renderer={({ hours, minutes, seconds }) => (
                    <span className="text-gray-700 font-semibold">
                      {hours}h {minutes}m {seconds}s
                    </span>
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;
