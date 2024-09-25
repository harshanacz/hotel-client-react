import React from "react";
import bgImage from "../../assets/fullFeaturesSection/2.jpg"; 

const OfferSection = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center mt-12 mb-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="text-center text-white p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-lg md:text-xl mb-6">
            Get a 30% discount on your next stay! Use code: **SAVE30**
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transform hover:scale-105 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
