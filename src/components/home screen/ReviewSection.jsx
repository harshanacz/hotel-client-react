import React from "react";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "An amazing experience! The staff were incredibly friendly and the rooms were spotless.",
    date: "September 20, 2024",
  },
  {
    name: "Jane Smith",
    rating: 4,
    text: "The hotel was nice, but I wish the breakfast options were more diverse.",
    date: "September 18, 2024",
  },
  {
    name: "Alice Johnson",
    rating: 5,
    text: "Absolutely loved my stay! The view from my room was breathtaking.",
    date: "September 15, 2024",
  },
  {
    name: "Bob Brown",
    rating: 3,
    text: "The location was great, but the noise from the street was a bit much.",
    date: "September 10, 2024",
  },
  {
    name: "Charlie Davis",
    rating: 4,
    text: "Enjoyed my stay, very comfortable and clean.",
    date: "September 5, 2024",
  },
  {
    name: "Diana Wilson",
    rating: 5,
    text: "Fantastic experience! Would definitely recommend to friends.",
    date: "September 1, 2024",
  },
];

const ReviewSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-8 mb-10">
        <h2 className="text-4xl font-bold text-center mb-3">Guest Reviews</h2>
      <h2 className="text-2xl font-normal text-center mb-12">What our customers said</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <div className="flex items-center mb-2">
              <span className="font-semibold">{review.name}</span>
              <span className="ml-2 text-yellow-500">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p className="text-gray-700">{review.text}</p>
            <p className="mt-2 text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
