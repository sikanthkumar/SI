"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Career Guidance", href: "#career-guidance" },
    { label: "Contact us", href: "#contact" },
    { label: "About", href: "#about" },
];

export const HomeScreen: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Image src="/bg-image.jpg" alt="Background" fill priority className="object-cover -z-20" />

            <nav className="fixed top-0 left-0 w-full bg-[#ffffff1a] backdrop-blur-sm border-b border-[#00000033] shadow-md z-50 px-6 py-3">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <Link href="#home" className="flex items-center gap-2">
                        <Image src="/logs.png" alt="Company Logo" width={120} height={60} className="w-[120px] h-auto" />
                    </Link>

                    <ul className="flex gap-4 md:gap-8">
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="text-white text-sm md:text-lg hover:opacity-80 transition-opacity">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm md:text-base hover:bg-blue-600 transition">
                                Login / Signup
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <header id="home" className="relative w-full min-h-[600px] md:min-h-[700px] text-white pt-24 md:pt-36">
                <Image fill className="object-cover -z-10" alt="Hero background" src="/image54.jpg" priority />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full max-w-6xl mx-auto px-4 md:px-12 gap-6">
                    <div className="w-[240px] sm:w-[300px] md:w-[400px] mb-6 md:mb-0">
                        <Image src="/Avatarplaceholder.svg" alt="Career guidance illustration" width={400} height={400} className="object-contain" />
                    </div>

                    <div className="max-w-xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 px-4 py-2 rounded-full w-fit mb-6">
                            <Image src="/users1.png" alt="Trusted users" width={40} height={20} className="rounded-full" />
                            <p className="text-xs sm:text-sm text-white">Trusted by 3,000+ people</p>
                        </div>

                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-snug">The future of career planning is here</h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
                            Navigate your <span className="font-semibold text-white">future</span> with expert insights, industry trends and detailed career roadmaps.
                        </p>

                        <div className="absolute top-[10px] left-[50px] bg-[#fffefc] shadow-lg rounded-2xl p-4 w-[260px] text-center">
                            <div className="text-sm font-semibold bg-black text-white rounded-full px-3 py-1 inline-block mb-2">Satisfaction Rate 93.5%</div>
                            <Image src="/youngManStudyingOnline.svg" alt="Satisfaction" width={120} height={120} className="mx-auto" />
                            <p className="mt-2 text-sm font-medium text-[#000000cc]">1.2 Million Students already found their Career</p>
                        </div>

                        <div className="absolute bottom-12 left-12 text-white">
                            <p className="font-semibold text-2xl">Get Updates Live</p>
                            <p className="mt-4 text-sm">Newsletter</p>
                            <p className="text-lg">Latest Job Trends</p>
                        </div>
                        <div className="absolute bottom-12 right-12 text-white text-right">
                            <p className="text-sm">Achievements</p>
                            <p className="text-lg">Read our Success Stories</p>
                        </div>

                        <Link href="/register" className="inline-block mt-6 px-6 py-3 bg-[#0077b6] rounded-lg text-white font-semibold hover:bg-[#0096c7]">
                            Get Started with your Career Path
                        </Link>
                    </div>
                </div>
            </header>

            <section id="career-guidance" className="py-20 px-4 md:px-12 lg:px-24 bg-[#ebfcff]">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#000000cc]">Discover and Build In-Demand Career Skills</h2>
                    <p className="text-[#00000099] mt-4 text-base md:text-lg italic">
                        <span className="font-semibold">Enhance Your </span>
                        <span className="font-bold">Potential </span>
                        <span className="font-semibold">Through </span>
                        <span className="font-bold">Skill Development</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
                        <Image src="/fro_bac.png" alt="Frontend backend" width={250} height={200} className="object-contain" />
                        <div className="flex-1">
                            <p className="text-[#00add0] font-semibold">Let’s see what we got</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#000000cc] mt-2">Explore Relevant Career Skills</h3>
                            <p className="text-[#00000099] mt-4 text-sm md:text-base">
                                In today’s dynamic job market, acquiring the right skills is key to staying competitive. This section helps you identify and develop essential skills across industries.
                            </p>
                            <span className="inline-block mt-4 px-4 py-1 text-green-600 border border-green-600 rounded-md text-sm font-semibold">Updated</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
                        <Image src="/lettering.png" alt="Skill illustration" width={250} height={200} className="object-contain" />
                        <div className="flex-1">
                            <p className="text-[#00add0] font-semibold">Transform with Skill Training</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#000000cc] mt-2">Unlock Growth Through Skill Development Opportunities</h3>
                            <p className="text-[#00000099] mt-4 text-sm md:text-base">Build your expertise through targeted skill training. Unlock opportunities and shape your future success.</p>
                            <span className="inline-block mt-4 px-4 py-1 text-green-600 border border-green-600 rounded-md text-sm font-semibold">Updated</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-6 lg:col-span-2">
                        <Image src="/db.png" alt="Database illustration" width={250} height={200} className="object-contain" />
                        <div className="flex-1">
                            <p className="text-[#00add0] font-semibold">Enhance your Knowledge with</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#000000cc] mt-2">Access Comprehensive Educational Resources</h3>
                            <p className="text-[#00000099] mt-4 text-sm md:text-base">Explore a wide range of learning materials, tools, and guides to enhance your knowledge. From study aids to expert articles, these resources are designed to support your academic and personal growth.</p>
                            <span className="inline-block mt-4 px-4 py-1 text-green-600 border border-green-600 rounded-md text-sm font-semibold">Updated</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center my-20">
                <Link href="/register" className="px-8 py-4 rounded-xl bg-[#0077b6] text-white text-xl font-bold hover:bg-[#0096c7]">
                    Get Started
                </Link>
            </div>

            <footer id="contact" className="bg-[#0077b6] text-white py-12 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg font-semibold">Call Our helpline</p>
                        <p className="mt-1 text-sm">Got career-related questions? Talk to our experts.</p>
                        <p className="text-lg font-bold mt-2">+91 9876543210</p>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xl font-semibold">Contact Us</p>
                        <p>9, stamp colony</p>
                        <p>Chennai - 987 002</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <Image src="/letter.png" alt="Mail" width={24} height={24} />
                    <a href="mailto:stamp@gmail.com" className="underline">stamp@gmail.com</a>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;


