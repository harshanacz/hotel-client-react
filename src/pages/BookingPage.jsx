import React from 'react';
import MainLayout from '../layout/MainLayout';
import BookingBar from '../components/booking screen/BookingBar';
import RoomCard from '../components/booking screen/RoomCard';
import { ToastContainer } from 'react-toastify';
import BookingHeader from '../components/booking screen/BookingHeader';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRooms = async () => {
  const response = await axios.get('/api/rooms/getallrooms');
  return response.data;
};

const BookingPage = () => {
  const { data: rooms, error, isLoading } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
  });

  return (
    <MainLayout>
      <BookingHeader />
      <BookingBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mx-4">
        {isLoading ? (
          <div className="col-span-3 flex justify-center">
            <div className="text-lg text-gray-600 my-20">Loading rooms...</div>
          </div>
        ) : error ? (
          <div className="col-span-3 text-center text-red-500">
            Error: {error.message}
          </div>
        ) : (
          rooms.map((room) => (
            <RoomCard key={room._id} room={room} /> // Use room._id for the key
          ))
        )}
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default BookingPage;
