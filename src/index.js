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
    path: "room/:roomId", // Dynamic route - room ID
    element: <RoomPage />,  
  },
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
