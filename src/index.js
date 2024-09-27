import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import BookingPage from './pages/BookingPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import RoomPage from './pages/RoomPage';
import PaymentPage from './pages/PaymentPage';
import NotFoundPage from './pages/NotFoundPage';

// QueryClient
const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "booking",
    element: <BookingPage />,
  },
  {
    path: "room/:roomId", // Dynamic - room ID
    element: <RoomPage />,  
  },
  {
    path: "payment",
    element: <PaymentPage />,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} /> 
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
