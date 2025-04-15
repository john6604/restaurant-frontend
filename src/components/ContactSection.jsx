import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

const ContactSection = () => {
    return (
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-2">
            <div className="flex justify-center items-center space-x-6">
              <a href="https://www.facebook.com/share/1AP1EWcQhG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xs text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-sm text-gray-700 hover:text-pink-600 transition-colors duration-300" />
              </a>
              <span className="flex items-center space-x-1 text-sm text-gray-600">
                <a href="https://www.google.com/maps?q=The+Breakfast+Club+of+Ocoee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-600">
                <FaMapMarkerAlt className="text-xs text-gray-600 hover:text-red-600 transition-colors duration-300" />
                </a>
                <a
                    href="https://www.google.com/maps?q=The+Breakfast+Club+of+Ocoee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-600"
                >
                    267 West Rd, Ocoee, FL, Florida
                </a>
                </span>
              <span className="flex items-center space-x-1 text-sm text-gray-600" >
                <FaPhoneAlt className="text-xs text-gray-600 hover:text-green-600 transition-colors duration-300" />
                <span> CALL US: (407) 347-5782</span>
              </span>
            </div>
          </div>
        </header>
    );
};

export default ContactSection;