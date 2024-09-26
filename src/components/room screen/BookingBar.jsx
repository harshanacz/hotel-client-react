
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const BookingBar = ({ roomPricePerNight }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date();
  maxDate.setMonth(today.getMonth() + 2);

  const handleCheckInChange = (date) => {
    if (date && date < today) {
      toast.error("Check-in date cannot be in the past.");
      return;
    }
    setCheckInDate(date);
    if (checkOutDate && date >= checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutChange = (date) => {
    if (date && date <= checkInDate) {
      toast.error("Check-out date must be after check-in date.");
      return;
    }
    setCheckOutDate(date);
  };

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    return days * roomPricePerNight;
  };

  return (
    <div className="text-black p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Check-in Date */}
        <div className="flex flex-col">
          <label className="mb-1">Check-in Date:</label>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInChange}
            minDate={today}
            maxDate={maxDate}
            placeholderText="Select check-in date"
            dateFormat="dd 'of' MMMM"
            className="p-3 border rounded-full text-lg bg-gray-100 text-black"
          />
        </div>

        {/* Check-out Date */}
        <div className="flex flex-col">
          <label className="mb-1">Check-out Date:</label>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutChange}
            minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : today}
            maxDate={maxDate}
            placeholderText="Select check-out date"
            dateFormat="dd 'of' MMMM"
            className="p-3 border rounded-full text-lg bg-gray-100 text-black"
          />
        </div>
      </div>

      {/* Total Price Display */}
      
      <div className="mt-4">
      <h2 className="text-xl font-semibold">Total Days: {calculateTotalPrice() != 0 ?(checkOutDate - checkInDate) / (1000 * 60 * 60 * 24):'_'}</h2>
        <h2 className="text-xl font-semibold">Total Price: ${calculateTotalPrice()}</h2>
      </div>

      {/* Booking Button */}
      <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full transition-transform duration-300 transform hover:scale-105 active:scale-95">
  Book the Room
</button>
{/* // add refund policy */}
      
    </div>
  );
};

export default BookingBar;
