"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type PathStep = { label: string; description: string };
type CareerField = {
    id: string;
    title: string;
    category: string;
    image: string;
    additionalImage?: string;
    path: PathStep[];
};

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Career Guidance", href: "#career-guidance" },
    { label: "Contact us", href: "#contact" },
    { label: "About", href: "#about" },
];

const careerFields: CareerField[] = [
    {
        id: "software-development",
        title: "Software Development",
        category: "Technology and IT",
        image: "/code_on_lap.png",
        additionalImage: "/image-30.png",
        path: [
            { label: "High School", description: "Computer Science subjects" },
            { label: "Bachelor's Degree", description: "Computer Science/IT/Software Engineering" },
            { label: "Skills", description: "Programming (Python, Java, C++), Data Structures, Algorithms" },
            { label: "Certifications", description: "AWS, Azure, Full Stack Development" },
            { label: "Entry-Level Role", description: "Junior Developer" },
            { label: "Growth", description: "Software Engineer → Tech Lead → Solutions Architect" },
        ],
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        category: "Technology and IT",
        image: "/cyber.png",
        path: [
            { label: "High School", description: "IT/Mathematics focus" },
            { label: "Bachelor's Degree", description: "Cybersecurity/IT/Computer Science" },
            { label: "Certifications", description: "CEH, CISSP, CompTIA Security+" },
            { label: "Skills", description: "Network Security, Ethical Hacking, Risk Assessment" },
            { label: "Entry-Level Role", description: "Security Analyst" },
            { label: "Growth", description: "Security Consultant → Cybersecurity Manager" },
        ],
    },
    {
        id: "medical-doctor",
        title: "Medical Doctor",
        category: "Medicine and Healthcare",
        image: "/med_code.png",
        path: [
            { label: "High School", description: "Biology, Chemistry, Physics" },
            { label: "Degree", description: "MBBS (Bachelor of Medicine and Bachelor of Surgery)" },
            { label: "Training", description: "Internship and Residency in specialization" },
            { label: "Skills", description: "Patient Care, Diagnostics, Surgical Procedures" },
            { label: "Growth", description: "General Practitioner → Specialist (Cardiologist, Neurologist)" },
        ],
    },
    {
        id: "physiotherapy",
        title: "Physiotherapy",
        category: "Medicine and Healthcare",
        image: "/consultation.png",
        path: [
            { label: "High School", description: "Biology focus" },
            { label: "Degree", description: "Bachelor of Physiotherapy (BPT)" },
            { label: "Skills", description: "Rehabilitation, Anatomy, Manual Therapy" },
            { label: "Growth", description: "Physiotherapist → Sports Physiotherapist" },
        ],
    },
    {
        id: "journalism",
        title: "Journalism",
        category: "Arts and Humanities",
        image: "/journal.png",
        path: [
            { label: "High School", description: "English, Social Sciences focus" },
            { label: "Degree", description: "Journalism/Mass Communication" },
            { label: "Skills", description: "Writing, Reporting, Investigative Techniques" },
            { label: "Entry-Level Role", description: "Reporter" },
            { label: "Growth", description: "Senior Editor → Media Director" },
        ],
    },
    {
        id: "psychology",
        title: "Psychology",
        category: "Arts and Humanities",
        image: "/psychology.png",
        path: [
            { label: "High School", description: "Psychology, Sociology focus" },
            { label: "Degree", description: "Bachelor's in Psychology" },
            { label: "Postgraduate", description: "Clinical Psychology/Industrial Psychology" },
            { label: "Skills", description: "Counseling, Behavioral Analysis, Research" },
            { label: "Growth", description: "Psychologist → Specialist Counselor" },
        ],
    },
];

type CareerPathCardProps = { field: CareerField; index: number };
const CareerPathCard: React.FC<CareerPathCardProps> = ({ field, index }) => {
    const isReversed = index % 2 === 1;
    return (
        <section className="w-full py-12 px-4 md:px-16">
            <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-8`}>
                <div className="flex-1">
                    <div className="bg-[#cef7ff05] rounded-2xl border border-[#00000033] shadow p-6 md:p-8">
                        <h2 className="font-bold text-[#000000cc] text-xl md:text-3xl mb-6">
                            <span className="font-medium">Field: </span>
                            {field.title}
                        </h2>
                        <div className="font-medium text-[#000000cc] text-lg md:text-2xl mb-6">Path :</div>
                        <div className="space-y-3">
                            {field.path.map((step: PathStep, stepIndex: number) => (
                                <p key={stepIndex} className="text-[#000000b2] text-sm md:text-lg leading-relaxed">
                                    <span className="font-bold">{step.label}</span>: {step.description}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-[500px]">
                    <div className="relative">
                        <Image width={500} height={419} className="w-full h-[250px] md:h-[419px] object-cover rounded-lg" alt={field.title} src={field.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function CareerGuidance() {
    return (
        <main className="w-full min-h-screen bg-white">
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
                    </ul>
                </div>
            </nav>

            <header className="relative w-full h-auto min-h-[600px] md:min-h-[700px] text-white pt-24 md:pt-36">
                <Image fill className="object-cover" alt="Hero background" src="/rectangle479.png" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full max-w-6xl mx-auto px-4 md:px-12 gap-6">
                    <div className="w-[240px] sm:w-[300px] md:w-[400px] mb-6 md:mb-0">
                        <Image src="/users.png" alt="Career guidance illustration" width={400} height={400} className="object-contain" />
                    </div>
                    <div className="max-w-xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 px-4 py-2 rounded-full w-fit mb-6">
                            <Image src="/users1.png" alt="Trusted users" width={40} height={20} className="rounded-full" />
                            <p className="text-xs sm:text-sm text-white">Trusted by 3,000+ people</p>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-snug">Need a Plan / RoadMap <br /> to your Goal?</h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
                            Unlock your <span className="font-semibold text-white">potential</span> and pave the way to your
                            <span className="font-semibold text-white"> dream career</span> with our personalized roadmap.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200">
                            Let us guide you every step of the way to achieve your goals. Your <span className="font-semibold text-white">future starts now</span> — apply today and
                            <span className="font-semibold text-white"> embark on your journey to success!</span>
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto">
                {careerFields.map((field, index) => (
                    <CareerPathCard key={field.id} field={field} index={index} />
                ))}
            </div>

            <footer className="w-full bg-gray-900 text-white py-12 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg">Got career-related questions?</p>
                        <p className="text-2xl font-bold">+91 9876543210</p>
                        <p className="mt-2">Talk to our experts.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xl font-semibold">Contact Us</p>
                        <p>9, Stamp colony</p>
                        <p>Chennai - 987 002</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <Image src="/mail.png" alt="Mail" width={24} height={24} />
                        <a href="mailto:stamp@gmail.com" className="underline">stamp@gmail.com</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}


