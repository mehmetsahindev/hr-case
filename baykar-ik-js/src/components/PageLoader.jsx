import React from "react";

const PageLoader = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-amber-50 flex items-center justify-center">
      <div className="flex items-center animate-bounce">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-7.5 -3.5 24 24"
            width="100"
            className="fill-amber-500"
          >
            <path d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5v3.468z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-2xl text-red-500">Quick</p>
          <p className="font-bold text-2xl text-amber-500">Quiz</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
