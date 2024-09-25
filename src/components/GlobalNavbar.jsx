import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
//import { Link } from "react-router-dom";

const GlobalNavbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  
    return (
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/20">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-12  mr-2" src={logo} alt="Logo" />
              {/* <span className="text-xl tracking-tight">American National Bank</span> */}
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className=" hover:text-blue-600 text-base text-white ">
    {item.label}
  </a>
  
  
  
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <a href="#" className="py-2 px-3 border border-white text-white rounded-full">
                Log in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-full text-white"
              >
                Book Now
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden border-b border-neutral-700/20">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default GlobalNavbar
