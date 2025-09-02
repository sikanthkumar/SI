import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#1976D2] rounded-2xl mt-4 px-6 shadow-lg flex items-center justify-between h-20 w-full">
            <div className="flex items-center">
                <Image src="/logo2.png" alt="SURVIA Logo" width={120} height={40} className="object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8 text-white font-medium ml-auto">
                <ul className="hidden md:flex space-x-8 text-white font-medium mr-6">
                    <li><a href="/" className="hover:text-gray-200">Home</a></li>
                    <li><a href="/career-guidance" className="hover:text-gray-200">Career Guidance</a></li>
                    <li><a href="/contact-us" className="hover:text-gray-200">Contact Us</a></li>
                    <li><a href="/about" className="hover:text-gray-200">About</a></li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#eaddff] rounded-full flex items-center justify-center cursor-pointer">
                    <Image src="/Generic avatar.png" alt="Generic avatar" width={32} height={32} className="rounded-full" />
                </div>
                <button className="md:hidden p-2 rounded-md border border-white text-white">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;


