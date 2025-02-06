import React, { useState } from 'react';
import './index.css'
interface CustomNavbarProps {
  img?: string; // Logo image URL (optional)
  atags?: string[]; // Array of navigation links (optional)
  onClicksAtags?: () => void; // Optional callback for the anchor tags
  styles?: string; // Additional custom styles (optional)
  buttonStyles?: string[]; // Array of button styles (optional)
  buttonNames?: string[]; // Array of button names (optional)
  onClickBtn?: () => void; // Optional callback for button clicks
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({
  img,
  atags,
  onClicksAtags,
  styles,
  buttonStyles,
  buttonNames,
  onClickBtn
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className={`w-full h-[10vh] flex items-center justify-between px-4 sm:px-6 md:px-10 ${styles}`}>
      {/* Logo Section */}
      <div>
        <img
          className="w-12 h-12 object-contain"
          src={img || 'default-image-url'}
          alt="Logo"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex">
        {atags?.map((item, index) => (
          <a
            onClick={onClicksAtags}
            href={`#${item.toLowerCase()}`}
            key={index}
            className="text-white hover:text-gray-400 mx-4"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Slider Menu (Mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center md:hidden">
          <div className="bg-white p-6 rounded-lg w-3/4 max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <img className="w-12 h-12 object-contain" src={img || 'default-image-url'} alt="Logo" />
              <button onClick={() => setIsMenuOpen(false)} className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center">
              {atags?.map((item, index) => (
                <a
                  onClick={onClicksAtags}
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  className="text-black hover:text-gray-600 mb-4"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Buttons */}
              {buttonNames?.map((name, index) => (
                <button
                  onClick={onClickBtn}
                  key={index}
                  className={`${buttonStyles?.[index] || buttonStyles?.[0]} bg-white px-[2vw] py-[0.3vw] rounded-full mb-4`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        {buttonNames?.map((name, index) => (
          <button
            onClick={onClickBtn}
            key={index}
            className={`${buttonStyles?.[index] || buttonStyles?.[0]} bg-white px-[2vw] py-[0.3vw] rounded-full`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomNavbar;
