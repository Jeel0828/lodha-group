// import React from "react";

// const Book = () => {
//   return (
//     <section className="py-12 px-4 lg:px-8 bg-[#ECE4DA]">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 mb-3">
//             Book Site Visit Now for Vihaan Eleganza
//           </h2>
//           <p className="text-sm text-gray-700 font-small">
//             537+ Customers Visited Already
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="px-6 py-4 rounded-lg border border-black text-black placeholder-gray-400 text-base bg-white"
//           />

//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile Number"
//             maxLength={10}
//             className="px-6 py-4 rounded-lg border border-black text-black placeholder-black-400 text-base bg-white"
//           />

//           <button className="px-6 py-4 bg-[#CE811C] cursor-pointer text-white font-semibold text-md rounded-md transition shadow-md">
//             Book Free Visit Now!
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Book;


"use client";

import React, { useEffect, useRef, useState } from "react";

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

const Book = () => {
  const section = useInView();

  return (
    <section className="py-12 px-4 lg:px-8 bg-[#ECE4DA] overflow-hidden">
      <div
        ref={section.ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out
        ${section.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ letterSpacing: "0.5px" }}>
            Book Site Visit Now for Lodha Villa Royale Palava
          </h2>
          <p className="text-sm text-gray-700">
            537+ Customers Visited Already
          </p>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-6 py-4 rounded-lg border border-black bg-white text-black text-base
            focus:outline-none focus:ring-2 focus:ring-[#CE811C] transition"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            maxLength={10}
            className="px-6 py-4 rounded-lg border border-black bg-white text-black text-base
            focus:outline-none focus:ring-2 focus:ring-[#CE811C] transition"
          />

          <button
            className="px-6 cursor-pointer py-4 bg-[#A38022] text-white font-medium text-md rounded-md
            shadow-md transition-all hover:shadow-xl hover:scale-[1.02] active:scale-95"
            style={{ letterSpacing: "0.5px" }}
          >
            Book Free Visit Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;
