import React from 'react';
import image1 from '../../assets/fullFeaturesSection/1.jpg';
import image2 from '../../assets/fullFeaturesSection/2.jpg';
import image3 from '../../assets/fullFeaturesSection/3.jpg';
import image4 from '../../assets/fullFeaturesSection/4.jpg';

const images = [
  { src: image1, alt: 'Image 1', text: 'Eating', subtitle: 'Delicious Food Awaits' },
  { src: image2, alt: 'Image 2', text: 'Shopping', subtitle: 'Shop Till You Drop' },
  { src: image3, alt: 'Image 3', text: 'Excursions', subtitle: 'Adventure Awaits You' },
  { src: image4, alt: 'Image 4', text: 'Spa', subtitle: 'Relax and Unwind' },
];


const FullFeaturesSection = () => {
  return (
    <div>
        
      <div className="my-20 mx-0 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[70vh] object-cover transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 bg-black bg-opacity-50">
  <h1>{image.text}</h1>
  <h2 className="text-gray-300">{image.subtitle}</h2> {/* Add this line for the subtitle */}
</div>

            
            {/* Full-width overlay on hover */}
            <div className="absolute inset-0 transition-transform duration-300 transform scale-100 group-hover:scale-150 group-hover:z-10"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default FullFeaturesSection;
