import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MainLayout from '../layout/MainLayout';

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
        <img src={room.imgUrls[0]} alt={room.name} className="w-full h-96 object-cover mb-4" />
        <p className="text-lg mb-4">{room.description}</p>
        <p className="text-lg">Type: {room.type}</p>
        <p className="text-lg">Max Guests: {room.maxGuests}</p>
        <p className="text-lg">Price Per Night: ${room.pricePerDay}</p>
        <p className="text-lg">Double Beds: {room.doubleBed}</p>
        <p className="text-lg">Single Beds: {room.singleBed}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc ml-6">
            {room.features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default RoomPage;
