import React from "react";

const Shimmer = () => {
  return (
    <div>
      <section className="text-gray-700 body-font py-3 px-5 flex flex-wrap gap-5">
        <div className="container mx-auto flex gap-5 flex-wrap">
          {Array.from({ length: 6 }).map((item, index) => (
            <div className="flex flex-wrap -m-4" key={index}>
              <div className="p-4">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden w-[400px]">
                  <div className=" bg-gray-400 w-full object-cover object-center h-52" />
                  <div className="p-6">
                    <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400" />
                    <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400" />
                    <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shimmer;
