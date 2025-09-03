"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Career Guidance", href: "#career-guidance" },
    { label: "Contact us", href: "#contact" },
    { label: "About", href: "#about" },
];

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (
                [
                    "application/pdf",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ].includes(selectedFile.type) &&
                selectedFile.size <= 20 * 1024 * 1024
            ) {
                setFile(selectedFile);
            } else {
                alert("Invalid file. Only PDF, DOC, DOCX under 20MB allowed.");
            }
        }
    };

    return (
        <section className="w-full py-16 px-4 md:px-16 bg-gray-50">
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Upload Files :</h2>
                <label htmlFor="fileInput" className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-10 cursor-pointer hover:bg-gray-100">
                    <span className="text-gray-500 mb-2">📤 Drop files here</span>
                    <span className="text-gray-400">or</span>
                    <span className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md">Select file to upload</span>
                    <input id="fileInput" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                </label>
                <p className="text-sm text-gray-500 mt-4">Accepted file formats: PDF, DOC, DOCX <br /> Maximum file size: 20 MB</p>
                {file && <p className="mt-2 text-green-600 font-medium">✅ Selected: {file.name}</p>}
            </div>
        </section>
    );
};

const QuestionBox: React.FC = () => {
    const [answer, setAnswer] = useState("");
    return (
        <section className="w-full py-16 px-4 md:px-16 bg-white">
            {[
                "Full Name",
                "What is your current level of Education and Field of Study?",
                "What are your main interests or strengths(technical, creative, management, etc.,)?",
                "What is your career goal - higher studies, jobs(private/govt jobs), or business/entrepreneurship?",
                "Which industries or fields are you most curious about?(eg: IT, Engineering, Healthcare, Business, Arts, etc.,)",
            ].map((q) => (
                <div key={q} className="max-w-lg mx-auto border border-gray-300 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">{q}</h2>
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Write your answer here..." className="w-full border-b border-gray-400 focus:border-blue-500 outline-none py-2 px-1 text-gray-700" />
                </div>
            ))}
        </section>
    );
};

const ResumePage: React.FC = () => {
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

            <header className="relative w-full min-h-[600px] md:min-h-[700px] text-white pt-24 md:pt-36">
                <Image fill className="object-cover" alt="Hero background" src="/rectangle479.png" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full max-w-6xl mx-auto px-4 md:px-12 gap-6">
                    <div className="w-[240px] sm:w-[300px] md:w-[400px] mb-6 md:mb-0">
                        <Image src="/users.png" alt="Illustration" width={400} height={400} className="object-contain" />
                    </div>
                    <div className="max-w-xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 px-4 py-2 rounded-full w-fit mb-6">
                            <Image src="/users1.png" alt="Trusted users" width={40} height={20} className="rounded-full" />
                            <p className="text-xs sm:text-sm text-white">Trusted by 3,000+ people</p>
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 leading-snug">Build a great resume</h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200">Answer a few questions and upload your documents to get started.</p>
                    </div>
                </div>
            </header>

            <QuestionBox />
            <FileUpload />

            <footer className="w-full bg-gray-900 text-white py-12 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg">Got resume-related questions?</p>
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
};

export default ResumePage;


