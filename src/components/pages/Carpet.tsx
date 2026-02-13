// import React from "react";
// import { Download, ZoomIn } from "lucide-react";

// const Carpet = () => {
//   const properties = [
//     {
//       id: 1,
//       type: "1 BHK - 456 Sq.ft",
//       price: "₹ 96 Lacs*",
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/1BHK-Floor-Plan.jpg",
//     },
//     {
//       id: 2,
//       type: "2 BHK - 585 - 750 Sq.ft",
//       price: "₹ 1.23 Cr*",
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/2BHK-Floor-Plan.jpg",
//     },
//     {
//       id: 3,
//       type: "Jodi Flats Available",
//       price: "₹ On Request*",
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/3BHK-Floor-Plan.jpg",
//     },
//   ];

//   return (
//     <>
//       <section className="py-12 px-4 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-8">
//             Vihaan Eleganza Price & Carpet Area
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {properties.map((property) => (
//               <div
//                 key={property.id}
//                 className="bg-white border border-black rounded-md p-6 flex flex-col items-center hover:shadow-xl transition"
//               >
//                 <div className="w-full h-48 mb-6 flex items-center justify-center">
//                   <img
//                     src={property.image}
//                     alt={property.type}
//                     className="w-full h-full object-contain p-4 cursor-pointer"
//                   />
//                 </div>

//                 <h3 className="text-lg text-gray-700 font-medium mb-2 text-center">
//                   {property.type}
//                 </h3>

//                 <p className="text-xl font-medium text-gray-800 mb-6">
//                   {property.price}
//                 </p>

//                 <button className="w-full bg-[#CE811C] text-white text-sm font-medium py-3 rounded-lg">
//                   Price Breakup
//                 </button>
//               </div>
//             ))}

//             {/* Costing Card */}
//             <div className="bg-[#FAF2E8] border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-between">
//               <div className="w-full h-48 mb-4 flex items-center justify-center">
//                 <img
//                   src="https://revaahomes.com/wp-content/uploads/2023/08/Costing-Details-1.jpg"
//                   alt="Costing"
//                   className="w-full h-full object-contain p-2 cursor-pointer"
//                 />
//               </div>

//               <div className="text-center mb-4">
//                 <p className="text-md text-gray-700 mb-2">
//                   Complete Costing Details
//                 </p>
//                 <h3 className="text-xl font-medium text-gray-800">
//                   All Breakup
//                 </h3>
//               </div>

//               <button className="w-full bg-[#CE811C] text-white py-3 rounded-md flex items-center justify-center gap-2 mb-3">
//                 <Download className="w-5 h-5" />
//                 Download
//               </button>

//               <p className="text-xs text-gray-700">
//                 Hurry! 179+ Customers saved
//                 <span className="text-red-600 font-bold"> ₹2,75,000</span> Each
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= MASTER PLAN & UNIT PLAN ================= */}
//       <section className="pb-8 px-4 bg-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Master Plan */}
//           <div className="text-center">
//             <h3 className="text-2xl font-semibold text-gray-700 mb-2">
//               Master Plan Layout
//             </h3>

//             <div className="">
//               <img
//                 src="https://revaahomes.com/wp-content/uploads/2023/08/MasterPlan.jpg"
//                 className="w-full h-[350px] cursor-pointer object-contain p-4"
//               />
//             </div>

//             <button className="mt-3 cursor-pointer bg-[#CE811C] text-sm text-white px-6 py-3 rounded-md">
//               Show Master Layout Plan
//             </button>
//           </div>

//           {/* Unit Plan */}
//           <div className="text-center">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               Unit Plan Layout
//             </h3>

//             <div className="">
//               <img
//                 src="https://revaahomes.com/wp-content/uploads/2023/08/UnitPlan.jpg"
//                 className="w-full h-[350px] cursor-pointer object-contain p-4"
//               />
//             </div>

//             <button className="mt-3 cursor-pointer bg-[#CE811C] text-sm text-white px-6 py-3 rounded-md">
//               Show Unit Plan Layout
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Carpet;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";

const Carpet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [savedCount, setSavedCount] = useState(0);
  const sectionRef = useRef(null);

  const properties = [
    {
      id: 1,
      type: "3 BHK Villa",
      price: "₹ 2 Cr*",
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/1BHK-Floor-Plan.jpg",
    },
    {
      id: 2,
      type: "4 BHK Villa",
      price: "₹ 3.47 Cr*",
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/2BHK-Floor-Plan.jpg",
    },
    {
      id: 3,
      type: "Land",
      price: "₹ 2.06 Cr*",
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/3BHK-Floor-Plan.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 179;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setSavedCount(end);
          clearInterval(timer);
        } else {
          setSavedCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-12 px-4 lg:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-2xl font-semibold text-gray-900 mb-10 transform transition-all duration-700 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
            style={{ letterSpacing: "0.5px" }}
          >
            Lodha Villa Royale Palava Price & Carpet Area
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div
                key={property.id}
                onMouseEnter={() => setHoveredCard(null)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white border-2 border-gray-300 rounded-xl p-6 flex flex-col items-center hover:shadow-2xl hover:border-[#A38022] transition-all duration-300 transform ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-48 mb-6 flex items-center justify-center group">
                  <img
                    src={property.image}
                    alt={property.type}
                    className="w-full h-full object-contain p-4 cursor-pointer transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-base lg:text-lg text-gray-700 font-semibold mb-3 text-center min-h-[3rem] flex items-center">
                  {property.type}
                </h3>

                <p
                  className={`text-2xl font-bold text-gray-900 mb-6 transition-transform duration-300 ${hoveredCard === property.id ? "scale-110" : "scale-100"
                    }`}
                >
                  {property.price}
                </p>

                {/* Button */}
                <button className="w-full cursor-pointer bg-[#A38022] hover:bg-[#A38022] text-white text-sm font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  Price Breakup
                </button>
              </div>
            ))}

            {/* Costing Details Card */}
            <div
              className={`bg-gradient-to-br from-[#FAF2E8] to-[#F5E6D3] border-2 border-gray-300 rounded-xl p-6 flex flex-col items-center justify-between hover:shadow-2xl hover:border-[#CE811C] transition-all duration-300 transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="relative w-full h-48 mb-4 flex items-center justify-center group">
                <img
                  src="https://revaahomes.com/wp-content/uploads/2023/08/Costing-Details-1.jpg"
                  alt="Costing Details"
                  className="w-full h-full object-contain p-2 cursor-pointer transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="text-center mb-4">
                <p className="text-sm text-gray-700 font-medium mb-2">
                  Complete Costing Details
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  All Breakup
                </h3>
              </div>

              <button className="w-full cursor-pointer bg-[#A38022] hover:bg-[#A38022] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download
              </button>

              <p className="text-xs text-center text-gray-700 animate-pulse">
                Hurry!{" "}
                <span className="font-bold text-[#CE811C]">{savedCount}+</span>{" "}
                Customers saved
                <span className="text-red-600 font-bold"> ₹2,75,000</span> Each
                <span className="font-bold"> [Limited Time]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MASTER PLAN & UNIT PLAN SECTION */}
      <section className="pb-12 px-4 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={`text-center transform transition-all duration-700 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
            style={{ transitionDelay: "600ms", letterSpacing: "0.5px" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Master Plan Layout
            </h3>

            <div className="relative group transition-all duration-300">
              <img
                src="https://revaahomes.com/wp-content/uploads/2023/08/MasterPlan.jpg"
                alt="Master Plan"
                className="w-full h-[300px] md:h-[350px] cursor-pointer object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="mt-6 cursor-pointer bg-[#A38022] text-sm md:text-base text-white font-medium px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Show Master Layout Plan
            </button>
          </div>

          {/* Unit Plan */}
          <div
            className={`text-center transform transition-all duration-700 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
            style={{ transitionDelay: "600ms", letterSpacing: "0.5px" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Unit Plan Layout
            </h3>

            <div className="relative group overflow-hidden transition-all duration-300">
              <img
                src="https://revaahomes.com/wp-content/uploads/2023/08/UnitPlan.jpg"
                alt="Unit Plan"
                className="w-full h-[300px] md:h-[350px] cursor-pointer object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="mt-6 cursor-pointer bg-[#A38022] text-sm md:text-base text-white font-medium px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Show Unit Plan Layout
            </button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl max-h-[90vh] animate-zoom-in">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Carpet;
