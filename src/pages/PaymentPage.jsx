import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { ClipLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract state data passed from BookingBar
  const location = useLocation();
  const { roomDetails, totalPrice, checkInDate, checkOutDate } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      alert('Payment Successful!');
      setIsSubmitting(false);
    }, 2000);
  };

  {
    console.log(roomDetails);
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Payment - Nirvina</title>
      </Helmet>

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Payment Information</h1>

        {/* Room Details */}
        <div className="bg-gray-100 p-4 mb-6 w-full max-w-lg rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Room: {roomDetails?.name}</h2>
          <p className="text-lg">Check-in Date: {new Date(checkInDate).toLocaleDateString()}</p>
          <p className="text-lg">Check-out Date: {new Date(checkOutDate).toLocaleDateString()}</p>
          <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
        </div>

        {/* Payment Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name on Card</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="1234 1234 1234 1234"
                required
              />
            </div>

            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700">CVC</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="123"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex justify-center">
                  <ClipLoader color="#fff" size={24} />
                </div>
              ) : (
                'Pay Now'
              )}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </MainLayout>
  );
};

export default PaymentPage;
