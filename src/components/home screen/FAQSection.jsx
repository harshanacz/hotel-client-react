import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your reservation free of charge up to 24 hours before your check-in date.",
    },
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM.",
    },
    {
      question: "Do you offer free breakfast?",
      answer: "Yes, we offer complimentary breakfast for all guests from 7:00 AM to 10:00 AM.",
    },
    {
      question: "Is parking available at the hotel?",
      answer: "Yes, we provide free parking for all guests during their stay.",
    },
    {
      question: "Do you have Wi-Fi in the rooms?",
      answer: "Yes, complimentary Wi-Fi is available in all rooms and public areas of the hotel.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-3">Frequently Asked Questions</h2>
      <h2 className="text-2xl font-normal text-center mb-12">Everything You need to Know</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
