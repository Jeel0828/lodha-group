// import React from "react";
// import { Play } from "lucide-react";

// const Video = () => {
//   return (
//     <section className="py-12 px-4 lg:px-8 bg-white">
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-3xl text-center lg:text-3xl font-semibold text-gray-900 mb-6">
//               Sample Flat Tour
//             </h2>
//             <div className="relative aspect-video overflow-hidden shadow-xl group cursor-pointer">
//               <img
//                 src="https://revaahomes.com/wp-content/uploads/2023/08/Revaa-Homes-Sample-Flat-Image.jpg"
//                 alt="Sample Flat Tour"
//                 className="w-[500px] h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl lg:text-3xl text-center font-semibold text-gray-900 mb-6">
//               360° Drone Video
//             </h2>
//             <div className="relative aspect-video overflow-hidden shadow-xl group cursor-pointer">
//               <img
//                 src="https://revaahomes.com/wp-content/uploads/2023/08/Revaa-Homes-360-Degree-View.jpg"
//                 alt="360° Drone Video"
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Video;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const useInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const Video = () => {
  const left = useInView();
  const right = useInView();

  return (
    <section className="py-12 px-4 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SAMPLE FLAT */}
          <div
            ref={left.ref}
            className={`transition-all duration-700 ease-out
            ${left.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
              }`}
          >
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-6" style={{ letterSpacing: "0.5px" }}>
              Sample Flat Tour
            </h2>

            <div className="relative aspect-video overflow-hidden shadow-xl group cursor-pointer rounded-lg">
              <img
                src="https://revaahomes.com/wp-content/uploads/2023/08/Revaa-Homes-Sample-Flat-Image.jpg"
                alt="Sample Flat Tour"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>
          </div>

          {/* DRONE VIDEO */}
          <div
            ref={right.ref}
            className={`transition-all duration-700 ease-out
            ${right.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
              }`}
          >
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-6" style={{ letterSpacing: "0.5px" }}>
              360° Drone Video
            </h2>

            <div className="relative aspect-video overflow-hidden shadow-xl group cursor-pointer rounded-lg">
              <img
                src="https://revaahomes.com/wp-content/uploads/2023/08/Revaa-Homes-360-Degree-View.jpg"
                alt="360° Drone Video"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
