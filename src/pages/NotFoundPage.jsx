
import MainLayout from '../layout/MainLayout';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Page Not Found - Nirvina</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Go Back to Home
        </a>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
