import React from 'react';
import { Phone, Mail } from 'lucide-react'; 

const BookingHeader = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Room</h1>

      <div className="flex items-center justify-center space-x-4 text-lg md:text-xl mb-8">
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-black" />
          <span className="font-normal">+94 712 011 959</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-black" />
          <span className="font-normal">harshanacz@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
