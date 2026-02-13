import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://revaahomes.com/wp-content/uploads/2025/11/Landing-Page-Logo_11zon-10.webp"
              alt=""
              className="w-28 object-contain"
            />
          </div>

          <nav className="flex flex-wrap gap-6 lg:gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#A38022] font-medium transition"
            >
              Area & Price
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#A38022] font-medium transition"
            >
              Amenities
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#A38022] font-medium transition"
            >
              Location
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#A38022] font-medium transition"
            >
              Virtual Site Visit
            </a>
          </nav>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Revaa Homes, a prestigious venture under the umbrella of
            RevaaHomes.com, serves as a specialized platform exclusively crafted
            to showcase our esteemed partner brands. Committed to facilitating
            seamless and transparent promotion, our platform empowers brands to
            effectively connect with their desired audience. Leveraging a
            diverse set of tools, from targeted advertising campaigns to
            data-driven analytics, Revaa Homes provides brands with the
            essential resources to enhance their promotional strategies and
            achieve significant growth.
          </p>
          <p className="text-sm text-gray-700">
            Maharashtra RERA ID: {""}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              A51800046254
            </a>
          </p>
        </div>

        <div className="mb-8 p-4 ">
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold">Disclaimer:</span> We are an
            authorised marketing partner for this project. Provided content is
            given by respective owners and this website and content is for
            information purpose only and it does not constitute any offer to
            avail for any services. Prices mentioned are subject to change
            without prior notice and properties mentioned are subject to
            availability. You can expect a call, SMS or emails on details
            registered with us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-blue-600">revaa</div>
            <span className="text-sm text-gray-600">Homes</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
            <span>© Copyright</span>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-blue-600 transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
