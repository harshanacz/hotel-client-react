import bgVideo from '../../assets/bgVideo.mp4'; 
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="mt-8 text-4xl md:text-6xl font-bold mb-4">Luxury. Comfort. Serenity.</h1>
        <p className="text-lg md:text-2xl mb-6 lg:mx-40">Experience an unforgettable getaway where every moment is designed for your ultimate relaxation and peace of mind.</p>
       <Link to="/booking">
       <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg transform hover:scale-110 transition duration-300">
          Book Now
        </button></Link>
      </div>
    </div>
  );
}

export default HeroSection;
