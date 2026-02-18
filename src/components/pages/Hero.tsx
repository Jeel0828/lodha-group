"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gradient-to-br from-[#EFE3D1] via-[#E7D7C2] to-[#D8C2A3] py-8 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article
          className={`bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex-1">
            <div className="border-2 border-dashed border-gray-800 text-gray-900 font-bold text-center py-2.5 rounded-md mb-6 tracking-wider">
              BOOKING OPEN
            </div>

            <header className="text-center mb-4">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2 animate-fade-in tracking-wider">
                Lodha Villa <br /> Royale Palava
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-1 tracking-wider">
                Lodha Group
              </h2>
              <p className="text-md text-black font-medium tracking-wider mb-2">
                Dombivli West, Thane
              </p>
            </header>

            <div className="flex items-center justify-center gap-3 text-sm text-gray-800 mb-6 flex-wrap">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 animate-bounce" />
                <span className="font-medium">Land Parcel 20.32 Acres</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 animate-bounce" />
                <span className="font-medium">Floors G+1 Storey</span>
              </div>
            </div>

            <div className="bg-[#A38022] text-white text-center rounded-lg p-5 mb-6 shadow-md border-2 border-dashed border-white-300 hover:scale-105 transition-transform duration-300">
              <ul className="space-y-2 text-sm font-medium" style={{ letterSpacing: "0.05em" }}>
                <li
                  className="animate-slide-right"
                  style={{ animationDelay: "200ms" }}
                >
                  • Spot Booking Offer
                </li>
                <li
                  className="animate-slide-right"
                  style={{ animationDelay: "400ms" }}
                >
                  • Early Buy Discount
                </li>
                <li
                  className="animate-slide-right"
                  style={{ animationDelay: "600ms" }}
                >
                  • Flexipay For First 100 Customers
                </li>
              </ul>
            </div>

            <div className="text-center mb-6">
              <p className="text-xl text-gray-700 mb-3 font-medium">
                3, 4 BHK Luxury Villas & Land
              </p>
              <p
                className="text-4xl font-bold text-gray-900 hover:scale-110 transition-transform duration-300"
                style={{ letterSpacing: "1.5px" }}
              >
                ₹ 2 Crores*
              </p>
            </div>
          </div>

          <button className="bg-[#A38022] cursor-pointer shadow-lg text-white font-bold py-3.5 rounded-lg transition-all hover:bg-[#B87116] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
            Download Brochure 📄
          </button>
        </article>

        <figure
          className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-[600px] transform transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Lodha Villa Royale Palava - Luxury Villa View ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>

          <figcaption className="sr-only">
            Luxury villa images showcasing Lodha Villa Royale Palava's architectural beauty and amenities
          </figcaption>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2.5 transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2.5 transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                  ? "bg-orange-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </figure>

        {/* RIGHT CARD */}
        <article
          className={`bg-white rounded-lg shadow-lg p-6 flex flex-col transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex-1">
            <div className="border-2 border-dashed border-gray-800 text-gray-900 font-bold text-center py-2.5 rounded-md mb-6 tracking-wider">
              PROJECT HIGHLIGHTS
            </div>

            <header className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ letterSpacing: "0.5px" }}>
                LODHA GROUP
              </h3>
              <p className="text-md text-black font-medium" style={{ letterSpacing: "0.5px" }}>
                Dombivli West, Thane
              </p>
            </header>

            <ul className="space-y-3 text-sm text-gray-800 mb-6">
              {[
                "G+16 Storey Residential Towers",
                "Spread Across 1.1 Acres",
                "A Desirable Living, Excellent Connectivity & Comfort",
                "Luxurious 1, 2 BHK Residence",
                "Club House",
                "Gymnasium",
                "Indoor Games",
                "Kids Play Area",
                "Palm Beach Road – 03 Mins",
                "Nerul Railway Station – 04 Mins",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-black font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 hover:scale-105 transition-transform">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="font-medium">
                  <span className="font-bold">Rera Number : </span> Coming Soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <button className="w-full bg-[#A38022] text-white font-bold py-3.5 rounded-lg transition-all hover:bg-[#B87116] hover:shadow-xl hover:-translate-y-1 shadow-md mb-3">
              Get Best Deal & Offers
            </button>
            <p className="text-xs text-center text-gray-700 animate-pulse">
              Save Up To{" "}
              <span className="text-red-600 font-bold text-sm">₹2,75,000</span>{" "}
              <span className="font-semibold">[Limited Time]</span>
            </p>
          </div>
        </article>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
