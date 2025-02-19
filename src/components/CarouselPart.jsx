import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CarouselPart = ({ featured }) => {
  return (
    <div className="mb-12 max-w-6xl mx-auto">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 z-10"
            >
              <MdArrowBackIos size={24} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 z-10"
            >
              <MdArrowForwardIos size={24} />
            </button>
          )
        }
      >
        {featured.map((product) => (
          <div key={product.id} className="h-[400px] md:h-[500px] flex justify-center items-center bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-auto max-w-full object-contain rounded-lg"
            />
            <p className="legend bg-black bg-opacity-60 text-white p-2 rounded-md text-lg">
              {product.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPart;
