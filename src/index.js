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

// Create a router with defined routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "booking",
    element: <BookingPage />,
  },
  // {
  //   path: "login",
  //   element: <SignInPage />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the application */}
  </React.StrictMode>
);

reportWebVitals();
