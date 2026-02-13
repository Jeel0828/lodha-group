// import React from "react";

// const Amenities = () => {
//   const amenities = [
//     {
//       id: 1,
//       image: "https://revaahomes.com/wp-content/uploads/2023/08/Indoor-Gym.png",
//       alt: "Gymnasium",
//     },
//     {
//       id: 2,
//       image: "https://revaahomes.com/wp-content/uploads/2023/08/Yoga.png",
//       alt: "Yoga Area",
//     },
//     {
//       id: 3,
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/Multipurpose-Play-Area.png",
//       alt: "Sports Area",
//     },
//     {
//       id: 4,
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/Swimming-Pool.png",
//       alt: "Swimming Pool",
//     },
//     {
//       id: 5,
//       image:
//         "https://revaahomes.com/wp-content/uploads/2023/08/Kids-Play-Area.png",
//       alt: "Kids Play Area",
//     },
//     {
//       id: 6,
//       image: "https://revaahomes.com/wp-content/uploads/2023/08/Garden.png",
//       alt: "Garden",
//     },
//   ];

//   return (
//     <section className="py-12 px-4 lg:px-8 mt-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 mb-8">
//           Amenities Of Vihaan Eleganza Nerul
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {amenities.map((amenity) => (
//             <div
//               key={amenity.id}
//               className="relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
//             >
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img
//                   src={amenity.image}
//                   alt={amenity.alt}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Download Button */}
//         <div className="flex justify-center">
//           <button className="bg-[#CE811C] cursor-pointer text-white font-semibold py-3.5 px-10 rounded-md transition shadow-md">
//             Download Full Gallery
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Amenities;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Download, ZoomIn, X } from "lucide-react";

const Amenities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const amenities = [
    {
      id: 1,
      image: "https://revaahomes.com/wp-content/uploads/2023/08/Indoor-Gym.png",
      alt: "Gymnasium",
      title: "Gymnasium",
    },
    {
      id: 2,
      image: "https://revaahomes.com/wp-content/uploads/2023/08/Yoga.png",
      alt: "Yoga Area",
      title: "Yoga & Meditation",
    },
    {
      id: 3,
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/Multipurpose-Play-Area.png",
      alt: "Sports Area",
      title: "Sports Arena",
    },
    {
      id: 4,
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/Swimming-Pool.png",
      alt: "Swimming Pool",
      title: "Swimming Pool",
    },
    {
      id: 5,
      image:
        "https://revaahomes.com/wp-content/uploads/2023/08/Kids-Play-Area.png",
      alt: "Kids Play Area",
      title: "Kids Play Area",
    },
    {
      id: 6,
      image: "https://revaahomes.com/wp-content/uploads/2023/08/Garden.png",
      alt: "Garden",
      title: "Landscaped Garden",
    },
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

  const openImageModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 lg:px-8 overflow-hidden bg-[#E7E4DA]"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-2xl font-semibold text-gray-900 mb-10 transform transition-all duration-700 ${isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
          style={{ letterSpacing: "0.5px" }}
        >
          Amenities Of Lodha Villa Royale Palava
        </h2>

        {/* Grid Layout with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              onMouseEnter={() => setHoveredId(amenity.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openImageModal(amenity.image)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={amenity.image}
                  alt={amenity.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-[#CE811C]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">
                    {amenity.title}
                  </h3>
                </div>
              </div>

              <div
                className={`absolute inset-0 border-4 border-[#CE811C] rounded-2xl transition-all duration-300 ${hoveredId === amenity.id
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-0"
                  }`}
              />
            </div>
          ))}
        </div>

        <div
          className={`flex justify-center transform transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <button className="bg-[#A38022] cursor-pointer hover:bg-[#A38022] text-white font-medium py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group flex items-center gap-3">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="text-sm md:text-base">Download Full Gallery</span>
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImageModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] animate-zoom-in">
            <button
              onClick={closeImageModal}
              className="absolute cursor-pointer -top-12 right-0 bg-white hover:bg-gray-200 rounded-full p-2 transition-all hover:scale-110 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            <img
              src={selectedImage}
              alt="Enlarged amenity view"
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

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Amenities;
