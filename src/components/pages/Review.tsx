"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star, Download, MailIcon } from "lucide-react";

const Review = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="bg-[#ECE4DA] py-12 lg:py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title with slide-in animation */}
        <h2
          className={`text-2xl font-semibold text-[#0b1c3d] mb-6 transform transition-all duration-700 ${isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
          style={{ letterSpacing: "0.5px" }}
        >
          Welcome To Lodha Villa Royale Palava
        </h2>

        {/* Description with fade-in animation */}
        <p
          className={`text-[#3d4a5c] text-sm md:text-base max-w-7xl mb-10 transform transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          style={{ fontWeight: "300", letterSpacing: "0.5px" }}
        >
          Lodha Villa Royale Palava offers an unmatched living experience with ultra-luxury lake-facing villas set within an exclusive 20-acre private estate. These ready-to-move premium residences feature spacious 3 and 4 BHK villa configurations, designed to provide comfort, style, and privacy. Limited to just 155 elite villas, the community ensures a low-density, serene environment surrounded by lush greenery. Residents can enjoy world-class lifestyle amenities including a clubhouse, landscaped gardens, and recreational facilities, all within a secure gated enclave. Built by the trusted Lodha Group, the project combines luxury, safety, and convenience, while offering excellent connectivity to Mumbai, Thane, and Navi Mumbai, making it an ideal choice for families, professionals, and discerning homebuyers seeking a sophisticated lifestyle.
        </p>

        {/* Google Reviews Section with scale animation */}
        <div
          className={`gap-3 mb-8 transform transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <img
            src="https://revaahomes.com/wp-content/uploads/2023/08/Google-Review.svg"
            alt="Google"
            className="w-8 h-8 object-contain inline-block mb-3 hover:scale-110 transition-transform duration-300"
          />
          <div>
            <p className="text-lg font-bold text-gray-900 mb-1">
              Customer Reviews
            </p>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <span className="text-base font-semibold text-gray-600">
                4.5 out of 5
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-orange-400 text-orange-400 transform transition-all duration-300 hover:scale-125 ${isVisible ? "animate-star-pop" : ""
                      }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                <Star
                  className={`w-5 h-5 fill-orange-200 text-orange-400 transform transition-all duration-300 hover:scale-125 ${isVisible ? "animate-star-pop" : ""
                    }`}
                  style={{ animationDelay: "500ms" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Download Button with slide-up animation */}
        <div
          className={`w-full flex items-center gap-4 mb-4 transform transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          <button
            className="flex items-center justify-center gap-3 bg-[#A38022] hover:bg-[#A38022] transition-all duration-300 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer group w-full md:w-auto"
            style={{ letterSpacing: "1px" }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span className="text-sm md:text-base">Download Brochure</span>
          </button>
        </div>

        <p
          className={`text-xs md:text-sm text-gray-700 flex items-center gap-2 font-medium transform transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
        >
          <MailIcon className="w-4 h-4 text-[#d2871c] animate-pulse" />
          <span className="font-bold text-[#d2871c]">{downloadCount} +</span>
          Customers Downloaded Already
        </p>
      </div>

      <style jsx>{`
        @keyframes star-pop {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-star-pop {
          animation: star-pop 0.5s ease-out forwards;
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

export default Review;
