// src/components/booking screen/BookingBar.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long' };
  return date.toLocaleDateString(undefined, options).replace(/(\d+)(?=\s)/, (match) => `${match}${getOrdinalSuffix(match)}`);
};

const getOrdinalSuffix = (day) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = parseInt(day);
  return suffixes[(value % 10 > 3 || Math.floor(value % 100 / 10) === 1) ? 0 : value % 10];
};

const BookingBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomType, setRoomType] = useState("Any");
  const [guests, setGuests] = useState(1);

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

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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

        {/* Room Type */}
        <div className="flex flex-col">
          <label className="mb-1">Room Type:</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="p-3 border rounded-full text-lg bg-gray-100 text-black"
          >
            <option value="Any">Any</option>
            <option value="Single">Single</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <label className="mb-1">Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Math.min(Math.max(1, e.target.value), 8))}
            min="1"
            max="8"
            className="p-3 border rounded-full text-lg bg-gray-100 text-black text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
