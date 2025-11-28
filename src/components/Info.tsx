"use client"
import React from 'react';
import { AnimatedTestimonialsDemo } from './Testimonial';
import Foot from './Foot';
import { useRouter } from "next/navigation";
import Image from "next/image";
import upload1 from "../../public/assests/images/upload1.jpg";
import upload2 from "../../public/assests/images/upload2.png";
import upload3 from "../../public/assests/images/upload3.jpg";
import security from "../../public/assests/images/security.jpg";

const Info: React.FC = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/chat");
    };
    return (
        <>
            <div className="text-center px-4 py-16 mt-20 font-sans max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">Understand Anything</h1>
                <h4 className="text-lg sm:text-xl md:text-2xl mt-8 sm:mt-10 md:mt-14 mx-auto max-w-2xl font-sans">
                    Your thinking and research companion — powered by trusted information and the latest LLM models.
                </h4>
                <button
                    type="button"
                    onClick={handleClick}
                    className="text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-8 sm:px-10 py-3 mt-8 sm:mt-10 hover:cursor-pointer"
                >
                    Try Now
                </button>
            </div>
            {/* <div className='mt-20'>
                <p className="text-4xl font-bold text-gray-800 text-center">Your AI-Powered Research Assistant</p>
                <div className="px-4 py-8 md:px-10 lg:px-20">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-10">
                        <div className="flex flex-col items-start gap-4 md:w-1/2">
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-xl mb-2">Heading</p>
                                <p>
                                    Upload PDFs, websites, YouTube videos, audio files, Google Docs,
                                    or Google Slides, and NotebookLM will summarize them and make
                                    interesting connections between topics, all powered by Gemini 2.0's
                                    multimodal understanding capabilities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-red-500 w-full h-80 md:w-1/2 rounded-lg flex justify-center items-center">
                            <img
                                src="/path/to/your/image.png"
                                alt="Research Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-10">
                        <div className="flex flex-col items-start gap-4 md:w-1/2">
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-xl mb-2">Heading</p>
                                <p>
                                    Upload PDFs, websites, YouTube videos, audio files, Google Docs,
                                    or Google Slides, and NotebookLM will summarize them and make
                                    interesting connections between topics, all powered by Gemini 2.0's
                                    multimodal understanding capabilities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-red-500 w-full h-80 md:w-1/2 rounded-lg flex justify-center items-center">
                            <img
                                src="/path/to/your/image.png"
                                alt="Research Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-10">
                        <div className="flex flex-col items-start gap-4 md:w-1/2">
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-xl mb-2">Heading</p>
                                <p>
                                    Upload PDFs, websites, YouTube videos, audio files, Google Docs,
                                    or Google Slides, and NotebookLM will summarize them and make
                                    interesting connections between topics, all powered by Gemini 2.0's
                                    multimodal understanding capabilities.
                                </p>
                            </div>
                        </div>
                        <div className="bg-red-500 w-full h-80 md:w-1/2 rounded-lg flex justify-center items-center">
                            <img
                                src="/path/to/your/image.png"
                                alt="Research Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="mt-20 sm:mt-24">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center px-4">
                    Your AI-Powered Research Assistant
                </p>

                <div className="px-4 py-8 md:px-10 lg:px-20 mt-10">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="flex flex-col items-start gap-4 md:w-1/2">
                        <div className="text-base sm:text-lg text-gray-600">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-gray-800">
                            Upload PDFs, Text, and Websites
                        </p>
                        <p>
                            Import your PDFs, text documents, or website URLs, and let the AI
                            analyze their content instantly. Our system processes diverse
                            sources to give you a unified foundation for your research.
                        </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <Image src={upload1} alt="Hero" width={800} height={600} priority />
                    </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 mb-16 md:flex-row-reverse">
                    <div className="flex flex-col items-start gap-4 md:w-1/2">
                        <div className="text-base sm:text-lg text-gray-600">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-gray-800">
                            Generate AI Summary with Latest LLM Models
                        </p>
                        <p>
                            Automatically summarize large documents using the latest LLM models.
                            Get clear, concise overviews that highlight key insights, helping you
                            grasp complex topics in seconds.
                        </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <Image src={upload2} alt="Hero" width={800} height={400} priority />
                    </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-10">
                    <div className="flex flex-col items-start gap-4 md:w-1/2">
                        <div className="text-base sm:text-lg text-gray-600">
                        <p className="font-semibold text-xl sm:text-2xl mb-2 text-gray-800">
                            Get Responses Based on User Context
                        </p>
                        <p>
                            Ask questions directly about your uploaded sources. The AI understands
                            context, citations, and relationships between topics—giving you
                            personalized, source-grounded answers.
                        </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <Image src={upload3} alt="Hero" width={800} height={600} priority />
                    </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-gray-100 mt-24 p-20">
                <p className="text-4xl mx-40 text-center">We value your privacy and do not use your personal data to train NotebookLM.</p>
                <p className="text-2xl mx-40 text-center mt-10">NotebookLM does not use your personal data, including your source uploads, queries, and the responses from the model for training.</p>
                <div className="bg-red-500 mt-10 w-full md:w-1/2 mx-auto h-80 rounded-lg flex justify-center items-center">
                    <img
                        src="/path/to/your/image.png"
                        alt="Research Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div> */}
            <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 mt-20 sm:mt-24 px-4 sm:px-6 py-16 sm:py-20 shadow-inner">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent py-2">We value your privacy — your data stays yours.</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-6 sm:mt-8 leading-relaxed px-1">
                        Our system never uses your personal data, source uploads, queries, or model
                        responses for training purposes. Your content remains private, secure, and
                        completely under your control.
                    </p>
                    <div className="relative mt-14 sm:mt-16 flex justify-center">
                        <div className="w-full sm:w-4/5 md:w-3/5 h-60 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
                            <Image
                                src={security}
                                alt="Hero"
                                width={1000}
                                height={700}
                                className="object-cover w-full h-full"
                                priority
                            />
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-xss rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-10 p-10 md:p-20">
                <p className="text-4xl text-center font-semibold text-gray-800">How people are using Retrievia</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md">
                        <p className="text-xl font-semibold text-center text-gray-800 mb-4">
                            Power study
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Upload lecture recordings, textbook chapters, and research papers. Ask NotebookLM to explain complex concepts in simple terms, provide real-world examples, and reinforce your understanding.
                        </p>
                        <p className="text-indigo-600 font-semibold text-center">
                            Learn faster and deeper
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md">
                        <p className="text-xl font-semibold text-center text-gray-800 mb-4">
                            Organize your thinking
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Upload your source material and let NotebookLM create a polished presentation outline, complete with key talking points and supporting evidence.
                        </p>
                        <p className="text-indigo-600 font-semibold text-center">
                            Present with confidence
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md">
                        <p className="text-xl font-semibold text-center text-gray-800 mb-4">
                            Spark new ideas
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            Upload brainstorming notes, market research, and competitor research. Ask NotebookLM to identify trends, generate new product ideas, and uncover hidden opportunities.
                        </p>
                        <p className="text-indigo-600 font-semibold text-center">
                            Unlock your creative potential
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="mt-20 px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
                <p className="py-1 text-3xl sm:text-4xl md:text-4xl text-center font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                    How People Are Using Retrievia
                </p>
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                            📚
                        </div>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center">Power Study</p>
                        <p className="text-gray-600 text-center leading-relaxed mb-6 text-sm sm:text-base">Upload lecture recordings, textbook chapters, and research papers. Ask Retrievia to explain complex concepts in simple terms.</p>
                        <p className="text-indigo-600 font-semibold text-center">Learn faster and deeper</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                            🧠
                        </div>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center">
                            Organize Your Thinking
                        </p>
                        <p className="text-gray-600 text-center leading-relaxed mb-6 text-sm sm:text-base">
                            Upload your PDFs, notes, articles, URLs,
                            or transcripts and get polished summaries.
                        </p>
                        <p className="text-indigo-600 font-semibold text-center">
                            Present with confidence
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 sm:col-span-2 sm:justify-self-center lg:col-span-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                            💡
                        </div>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 text-center">
                            Spark New Ideas
                        </p>
                        <p className="text-gray-600 text-center leading-relaxed mb-6 text-sm sm:text-base">
                            Upload your notes, PDFs, articles, or brainstorming documents.
                            Let Retrievia reveal patterns and generate new insights.
                        </p>
                        <p className="text-indigo-600 font-semibold text-center">
                            Turn information into inspiration
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-14 md:py-20 mt-8 sm:mt-10">
                <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-gray-800 mb-6 sm:mb-10">
                    What are people saying
                </p>
                <div className="max-w-6xl mx-auto">
                    <AnimatedTestimonialsDemo />
                </div>
            </div>
            <div>
                <Foot />
            </div>
        </>
    );
};

export default Info;