import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="bg-[#1976D2] rounded-2xl mt-4 px-6 shadow-lg flex items-center justify-between h-20 w-full">

      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo2.png"
          alt="SURVIA Logo"
          width={120}   // adjust width as per your design
          height={40}   // adjust height as per your design
          className="object-contain"
        />
      </div>

      {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-8 text-white font-medium ml-auto">
   <ul className="hidden md:flex space-x-8 text-white font-medium mr-6">
    <li><a href="/" className="hover:text-gray-200">Home</a></li>
    <li><a href="/career guidence" className="hover:text-gray-200">Career Guidence</a></li>
    <li><a href="/contact us" className="hover:text-gray-200">Contact Us</a></li>
    <li><a href="/about" className="hover:text-gray-200">About</a></li>
  </ul>
</div>


      {/* Right Side: Avatar + Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-10 h-10 bg-[#eaddff] rounded-full flex items-center justify-center cursor-pointer">
          <Image
            src="/Generic avatar.png"
            alt="Generic avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden p-2 rounded-md border border-white text-white">
          ☰
        </button>
      </div>
    </nav>
  );
};
