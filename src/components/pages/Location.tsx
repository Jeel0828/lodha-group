// import React from "react";
// import { Download } from "lucide-react";

// const Location = () => {
//   const locationPoints = [
//     "Palm Beach Road – 03 Mins",
//     "DY Patil Stadium – 09 Mins.",
//     "Wonders Park – 07 Mins",
//     "Nerul Railway Station – 04 Mins",
//     "Seawoods Grand Central Mall – 07 Mins",
//     "Navi Mumbai Intl. Airport – 25 Mins",
//     "DY Patil Hospital – 07 Mins",
//     "Apollo Hospital – 15 Mins",
//   ];

//   return (
//     <section className="py-12 px-4 lg:px-8 bg-[#E7D3BA]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 mb-6">
//           Vihaan Eleganza Nerul Location Advantage
//         </h2>

//         <p className="text-sm lg:text-base text-gray-800 leading-relaxed mb-10 max-w-6xl">
//           Vihaan Eleganza Nerul offers an excellent location with seamless
//           connectivity and top amenities nearby. Palm Beach Road is just 3
//           minutes away, ensuring smooth travel. Nerul Railway Station is
//           reachable in 4 minutes, while Seawoods Grand Central Mall and Wonders
//           Park are within 7 minutes for shopping and recreation. DY Patil
//           Stadium and DY Patil Hospital are also 7 minutes away, providing
//           sports and healthcare access. Apollo Hospital is a 15-minute drive for
//           advanced medical care. Navi Mumbai International Airport is just 25
//           minutes away, making travel convenient. Enjoy a well-connected and
//           comfortable lifestyle at Vihaan Eleganza.
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="relative w-full h-96 lg:h-[500px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5087144657825!2d73.01884731490055!3d19.03568398711729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d6e0e0e0e1%3A0x0!2sNerul%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Vihaan Eleganza Location"
//                 className="absolute inset-0"
//               ></iframe>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <div className="mb-8">
//               <h3 className="text-2xl lg:text-2xl font-semibold text-gray-900 mb-2 text-center">
//                 BEST CONNECTIVITY AT
//               </h3>
//               <p className="text-base font-semibold text-gray-700 text-center">
//                 NERUL, NAVI MUMBAI
//               </p>
//             </div>

//             <ul className="space-y-4 mb-8">
//               {locationPoints.map((point, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-3 text-gray-800"
//                 >
//                   <span className="text-blackfont-bold text-xl mt-0.5">•</span>
//                   <span className="text-base font-medium">{point}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="space-y-3">
//               <button className="w-full bg-[#CE811C] text-white font-bold py-3.5 rounded-lg transition shadow-md flex items-center justify-center gap-2">
//                 Download Brochure 📄
//               </button>

//               <p className="text-xs text-center text-gray-700">
//                 <span className="text-purple-600 font-bold text-base mr-1">
//                   ↓
//                 </span>
//                 <span className="font-semibold">
//                   3790+ Customers Downloaded Already
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Download, MapPin, Navigation } from "lucide-react";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const locationPoints = [
    { text: "Palm Beach Road" },
    { text: "DY Patil Stadium" },
    { text: "Wonders Park " },
    { text: "Nerul Railway Station " },
    { text: "Seawoods Grand Central Mall " },
    { text: "Navi Mumbai Intl. Airport " },
    { text: "DY Patil Hospital " },
    { text: "Apollo Hospital " },
  ];

  // Intersection Observer for scroll animation
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

  // Counter animation for downloads
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 3790;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDownloadCount(end);
          clearInterval(timer);
        } else {
          setDownloadCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 lg:px-8 bg-[#E7D3BA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title with slide-in animation */}
        <h2
          className={`text-2xl font-semibold text-gray-900 mb-6 transform transition-all duration-700 ${isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
          style={{ letterSpacing: "0.5px" }}
        >
          Vihaan Eleganza Nerul Location Advantage
        </h2>

        {/* Description with fade-in */}
        <p
          className={`text-sm md:text-base lg:text-sm text-gray-800 leading-relaxed mb-10 max-w-6xl transform transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          Lodha Villa Royale in Palava enjoys exceptional location advantages, offering residents seamless connectivity and access to essential conveniences. The project is just 2 minutes from Shri Ram Universal School, making it ideal for families seeking quality education close to home. Healthcare support is readily available with Bijankur Hospital only 8 minutes away. Daily commuting is effortless with Nilaje Station just 10 minutes from the property, ensuring smooth travel across Mumbai and Navi Mumbai. Residents also enjoy quick access to major roads such as NH-80 within 5 minutes, Kalyan–Shil Road in 8 minutes, and Airoli–Katai Naka in 8 minutes, providing excellent connectivity to business hubs and city centers. For shopping, entertainment, and leisure, Lodha Xperia Mall is only 8 minutes away, while Nafs Degree College nearby adds to the convenience for students. With such a well-connected and thoughtfully placed location, Lodha Villa Royale Palava offers a perfect balance of comfort, convenience, and urban accessibility.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Map Section - Takes 3 columns */}
          <div
            className={`lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <div className="relative w-full h-96 lg:h-[720px] group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5087144657825!2d73.01884731490055!3d19.03568398711729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d6e0e0e0e1%3A0x0!2sNerul%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vihaan Eleganza Location"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              ></iframe>

              {/* Map overlay icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Navigation className="w-5 h-5 text-[#CE811C]" />
              </div>
            </div>
          </div>

          {/* Connectivity Details - Takes 2 columns */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-8 transform transition-all duration-700 delay-500 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-[#A38022] animate-bounce" />
                <h3 className="text-xl font-medium text-gray-900" style={{ letterSpacing: "0.5px" }}>
                  BEST CONNECTIVITY AT
                </h3>
              </div>
              <p className="text-base font-medium text-[#A38022]" style={{ letterSpacing: "0.5px" }}>
                Dombivli West, Thane
              </p>
            </div>

            {/* Location Points with staggered animation */}
            <ul className="space-y-3 mb-8">
              {locationPoints.map((point, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActivePoint(index)}
                  onMouseLeave={() => setActivePoint(null)}
                  className={`flex items-center gap-3 text-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2 transform ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                    }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span
                    className={`text-[#CE811C] font-bold text-xl transition-transform duration-300 ${activePoint === index ? "scale-125" : "scale-100"
                      }`}
                  >
                    •
                  </span>
                  <span className="text-sm md:text-base font-medium flex-1">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Download Button */}
            <div
              className={`space-y-3 transform transition-all duration-700 delay-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
                }`}
            >
              <button className="w-full bg-[#A38022] hover:bg-[#A38022] text-white font-medium py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Brochure</span>
              </button>

              {/* Download Count with animated counter */}
              <p className="text-xs md:text-sm text-center text-gray-700 flex items-center justify-center gap-2">
                <span className="text-purple-600 font-bold text-base animate-pulse">
                  ↓
                </span>
                <span className="font-medium text-[#A38022]">
                  {downloadCount}+
                </span>
                <span className="font-semibold" style={{ letterSpacing: "0.5px" }}>
                  Customers Downloaded Already
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ce811c;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b87116;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Location;
