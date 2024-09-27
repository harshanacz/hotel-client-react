import React, { useEffect } from 'react'; // Import useEffect
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';
import { Helmet } from 'react-helmet';
import CustomCarousel from '../components/room screen/CustomCarousel';
import BookingBar from '../components/room screen/BookingBar';
import { ClipLoader } from 'react-spinners';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const fetchRoomById = async (roomId) => {
  const response = await axios.get(`/api/rooms/${roomId}`);
  return response.data;
};

const RoomPage = () => {
  const { roomId } = useParams(); // Get the room ID from the URL
  const { data: room, error, isLoading } = useQuery({
    queryKey: ['room', roomId],
    queryFn: () => fetchRoomById(roomId),
  });

  // Scroll 2 top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Loading 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#007bff" loading={isLoading} size={50} />
      </div>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayout>
      <Helmet>
        <title>{room.name} - Nirvina</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row p-8">
        {/* Carousel Section */}
        <div className="lg:w-1/2">
          <CustomCarousel images={room.imgUrls} />
        </div>

        {/* Room Details Section */}
        <div className="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
          
          {/* Room Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-lg font-semibold">Type:</p>
              <p className="text-lg">{room.type}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-lg font-semibold">Max Guests:</p>
              <p className="text-lg">{room.maxGuests}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <p className="text-lg font-semibold">Price Per Night:</p>
              <p className="text-lg">${room.pricePerDay}</p>
            </div>
            {/* Conditionally Render Double Beds */}
            {room.doubleBed > 0 && (
              <div className="bg-gray-100 p-4 rounded shadow">
                <p className="text-lg font-semibold">Double Beds:</p>
                <p className="text-lg">{room.doubleBed}</p>
              </div>
            )}
            {/* Conditionally Render Single Beds */}
            {room.singleBed > 0 && (
              <div className="bg-gray-100 p-4 rounded shadow">
                <p className="text-lg font-semibold">Single Beds:</p>
                <p className="text-lg">{room.singleBed}</p>
              </div>
            )}
          </div>

          {/* Features Section without background */}
          <div className="mt-4 mb-6">
            <h3 className="text-xl font-semibold mb-2">Features:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {room.features.map((feature, index) => (
                <div key={index} className="p-4 rounded shadow">
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Bar Component */}
          <BookingBar roomPricePerNight={room.pricePerDay}   room={room}  />
        </div>
      </div>
    </MainLayout>
  );
};

export default RoomPage;
