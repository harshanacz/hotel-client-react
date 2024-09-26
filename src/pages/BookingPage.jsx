import React from 'react'
import MainLayout from '../layout/MainLayout'
import BookingBar from '../components/booking screen/BookingBar'
import RoomCard from '../components/booking screen/RoomCard'
import { ToastContainer } from 'react-toastify';
import BookingHeader from '../components/booking screen/BookingHeader';





const BookingPage = () => {
  
  return (
    <MainLayout>
         <BookingHeader/>
        <BookingBar/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mx-4">
      {roomData.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
        <ToastContainer />
    </MainLayout>
  )
}

export default BookingPage



//temp ROOM DATA


  const roomData = [
    {
      name: "Family Suite",
      type: "family",
      description: "A spacious suite for families with all the comforts.",
      pricePerDay: 150,
      doubleBed: 1,
      singleBed: 2,
      maxGuests: 5,
      imgUrls: ["https://i.ibb.co/ThL4cxv/1.jpg"],
      features: ["wifi", "parking", "breakfast"],
    },
    {
      name: "Single Deluxe Room",
      type: "single",
      description: "Perfect for solo travelers, offering a cozy and comfortable stay.",
      pricePerDay: 80,
      doubleBed: 0,
      singleBed: 1,
      maxGuests: 1,
      imgUrls: ["https://i.ibb.co/Jqvjq3r/2.jpg"],
      features: ["wifi", "air conditioning", "room service"],
    },
    {
      name: "Couple's Retreat",
      type: "couple",
      description: "A romantic suite designed for couples seeking relaxation and comfort.",
      pricePerDay: 120,
      doubleBed: 1,
      singleBed: 0,
      maxGuests: 2,
      imgUrls: ["https://i.ibb.co/Jq5kvc6/3.jpg"],
      features: ["jacuzzi", "wifi", "mini bar"],
    },
    {
      name: "Luxury Family Suite",
      type: "family",
      description: "A luxurious suite with ample space for the entire family to enjoy.",
      pricePerDay: 200,
      doubleBed: 2,
      singleBed: 2,
      maxGuests: 6,
      imgUrls: ["https://i.ibb.co/N3DR3f6/4.jpg"],
      features: ["private pool", "wifi", "breakfast", "parking"],
    },
    {
      name: "Business Class Room",
      type: "single",
      description: "An ideal room for business travelers with all essential amenities.",
      pricePerDay: 100,
      doubleBed: 1,
      singleBed: 0,
      maxGuests: 2,
      imgUrls: ["https://i.ibb.co/pb0Sg0B/5.jpg"],
      features: ["wifi", "workspace", "airport shuttle"],
    },
    {
      name: "Presidential Suite",
      type: "luxury",
      description: "An extravagant suite offering world-class amenities for VIP guests.",
      pricePerDay: 500,
      doubleBed: 2,
      singleBed: 1,
      maxGuests: 6,
      imgUrls: ["https://i.ibb.co/7vMhfYw/6.jpg"],
      features: ["butler service", "private pool", "jacuzzi", "wifi"],
    },
  ];

 


