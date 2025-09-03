import React from "react";
import { Group } from "./Group";
import { Navbar } from "./Navbar";
import { OverlapWrapper } from "./OverlapWrapper";
import Image from "next/image";

export const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 mt-12">
        {/* Title + Subtitle */}
        <div className="w-full max-w-6xl">
          <Group />
        </div>

        {/* Contact Form with Illustration */}
        <div className="relative w-full max-w-6xl mt-12">
          <OverlapWrapper />
          <Image
            src="/letter1.png"
            alt="Illustration of sending a letter"
            width={220}
            height={100}
            className="hidden md:block absolute right-[80px] bottom-[-70px]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 w-full">
        <Image
          src="/Footer.png"
          alt="Footer background design"
          width={1920}
          height={200}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black md:text-xl font-medium"></p>
        </div>
      </footer>
    </div>
  );
};
