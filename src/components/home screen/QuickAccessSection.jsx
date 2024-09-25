import React from 'react';

import overwatervilla from '../../assets/serviceIcons/overwatervilla.png';
import beachclub from '../../assets/serviceIcons/beachclub.png';
import dining from '../../assets/serviceIcons/dining.png';
import excursion from '../../assets/serviceIcons/excursion.png';
import speedboat from '../../assets/serviceIcons/speedboat.png';
import beachvilla from '../../assets/serviceIcons/beachvilla.png';

export const services = [
  {
    title: "15 Mins From Airport",
    icon: speedboat
  },
  {
    title: "Wine & Dining",
    icon: dining
  },
  {
    title: "Beach Club",
    icon: beachclub
  },
  {
    title: "Fabulous Excursions",
    icon: excursion
  },
  {
    title: "Overwater Villas",
    icon: overwatervilla
  },
  {
    title: "Beach Villas",
    icon: beachvilla
  }
];

const QuickAccessSection = () => {
  return (
    <div className='my-10 mx-20'>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:px-16 lg:grid-cols-6 gap-2 gap-y-8 md:gap-y-8">
        {services.map((item, index) => (
          <li key={index} className="flex flex-col items-center group my-10">
            <div className="text-2xl mb-2 text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 transform transition-transform duration-300 group-hover:scale-125" // Scale on hover
              />
            </div>
            <a href="#" className="text-base text-center">
              {item.title} {/* Display the title with hover color change */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickAccessSection;
