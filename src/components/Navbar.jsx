import React from 'react';
import { useState } from 'react';
import PrincipalLogo from '../assets/PrincipalLogo.png';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav
            className="bg-transparent py-8"
            style={{
                boxShadow:
                    '0 -4px 6px -1px rgba(0,0,0,0.1), 0 4px 6px -1px rgba(0,0,0,0.1)',
            }}
        >
            <div className="flex justify-center items-center relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-red-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="md:hidden">
                    <a
                        href="/"
                        className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={PrincipalLogo}
                            alt="Logo"
                            className="h-14 w-auto min-w-[100px]"
                        />
                    </a>
                </div>

                <div className="hidden md:flex flex-wrap space-x-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
                    <FlyOutLink href="/">HOME</FlyOutLink>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>MENU</FlyOutLink>
                    <a
                        href="/"
                        className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={PrincipalLogo}
                            alt="Logo"
                            className="h-20 w-auto min-w-[100px]"
                        />
                    </a>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>PAGES</FlyOutLink>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>EVENTS</FlyOutLink>
                </div>

                <div className="ml-auto pr-8 hidden md:block">
                    <Button />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 px-6 flex flex-col items-center space-y-4">
                    <FlyOutLink href="/">HOME</FlyOutLink>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>MENU</FlyOutLink>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>PAGES</FlyOutLink>
                    <FlyOutLink href="#" FlyOutContent={MenuContent}>EVENTS</FlyOutLink>
                </div>
            )}
        </nav>
    );
};

const FlyOutLink = ({ children, href, FlyOutContent }) => {

    const [open, setOpen] = useState(false);

    const showFlyOut = open && FlyOutContent

    return(
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)} 
            className='group relative h-fit w-fit'
        >
            <a href={href} className='relative text-black'>
                {children}
                <span 
                style={{
                    transform: showFlyOut ? "scaleX(1)" : "scaleX(0)",
                  }}
                  className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-red-900 transition-transform duration-300 ease-out"
                  />
            </a>
            <AnimatePresence>
                {showFlyOut && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-12 bg-white text-black"
                >
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                    <FlyOutContent />
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MenuContent = () => {
    return (
        <div className="w-64 bg-white p-6 shadow-xl">
          <div className="mb-3 space-y-3">
            <h3 className="font-semibold">For Individuals</h3>
            <a href="#" className="block text-sm hover:underline">
            MENU
            </a>
          </div>
        </div>
      );
};

const Button = () => {
    return (
      <StyledWrapper>
        <a className="btn" href="#">ORDER ONLINE</a>
      </StyledWrapper>
    );
  }
  
  const StyledWrapper = styled.div`
    .btn {
     display: inline-block;
     padding: 0.6rem 0.6rem;
     font-size: 15px;
     font-weight: 700;
     color: rgb(127, 29, 29);
     border: 3px solid rgb(127, 29, 29);
     cursor: pointer;
     position: relative;
     background-color: transparent;
     text-decoration: none;
     overflow: hidden;
     z-index: 1;
     font-family: inherit;
    }
  
    .btn::before {
     content: "";
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     background-color: rgb(127, 29, 29);
     transform: translateX(-110%);
     transition: all .3s;
     z-index: -1;
    }
  
    .btn:hover::before {
     transform: translateX(0);
    }
    
    .btn:hover {
        color: white;
    }
    `;
    

export default Navbar;