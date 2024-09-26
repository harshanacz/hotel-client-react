import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <img
        src={room.imgUrls[0]} 
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{room.name}</h2>
        <p className="text-gray-600 mb-2">{room.description}</p>
        <p className="text-md font-semibold mb-1">Type: {room.type}</p>
        <p className="text-md mb-1">Max Capacity: {room.maxGuests} guests</p>
        <p className="text-md mb-1">
          Beds: {room.doubleBed} Double, {room.singleBed} Single
        </p>
        <p className="text-lg font-bold mb-2">${room.pricePerDay} per night</p>
        <div className="flex flex-wrap">
          {room.features.map((feature, index) => (
            <span key={index} className="bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
