"use client";

import Chatbot from "@/components/Chatbot";
import Foot from "@/components/Foot";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { useState } from "react";

const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

export default function Chat() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sources, setSources] = useState<string[]>([]);
    const [aiSummary, setAiSummary] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleFileUploaded = (fileName: string) => {
        setSources((prev) => [...prev, fileName]);
    };

    const generateAISummary = async (fileName: string) => {
        try {
            setLoading(true);
            const res = await fetch("/api/generateAISummary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fileName }),
            });

            const data = await res.json();
            setAiSummary(data.summary);
        } catch (error) {
            console.error("Error generating summary:", error);
            setAiSummary("Failed to generate summary.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
                <div className="flex flex-col lg:flex-row flex-1 overflow-hidden px-4 lg:px-8 py-4 gap-4">

                    <div className="flex-none lg:basis-[25%] basis-full bg-white/90 backdrop-blur-xl border border-indigo-100 rounded-2xl shadow-lg p-4">
                        <div className="flex justify-center mt-2">
                            <button
                                type="button"
                                onClick={handleOpenModal}
                                className="w-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 
                           hover:from-indigo-600 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200
                           font-semibold rounded-xl text-sm py-3 transition-all duration-300
                           shadow-md hover:shadow-lg"
                            >
                                + Add New Source
                            </button>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-indigo-700 mb-3 mx-2 flex items-center gap-2">
                                📁 Sources
                            </h3>
                            <div className="space-y-3">
                                {sources.length === 0 ? (
                                    <p className="text-gray-500 text-sm mx-2 italic">
                                        No sources uploaded yet
                                    </p>
                                ) : (
                                    sources.map((file, index) => (
                                        <div
                                            key={index}
                                            className="mx-2 p-3 bg-gradient-to-r from-indigo-50 to-purple-50
                                 border border-indigo-100 rounded-lg shadow-sm hover:shadow-md
                                 hover:scale-[1.01] cursor-pointer transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-800 font-medium truncate">{file}</p>
                                                <button
                                                    onClick={() => generateAISummary(file)}
                                                    className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                                     text-white rounded-md px-3 py-1 shadow-sm transition-all"
                                                >
                                                    Generate
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-none lg:basis-[35%] basis-full overflow-y-auto p-2">
                        <div className="p-6 bg-white/80 backdrop-blur-md border border-gray-200
                            shadow-2xl rounded-3xl h-full overflow-y-auto transition-all hover:shadow-indigo-200">
                            <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                                ✨ AI Summary
                            </h2>
                            {loading ? (
                                <p className="text-gray-600 text-center mt-4 animate-pulse">
                                    Generating summary...
                                </p>
                            ) : (
                                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                                    {aiSummary || "No summary generated yet."}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex-none lg:basis-[40%] basis-full bg-gradient-to-br from-white via-indigo-50 to-purple-50 
                          border border-indigo-100 rounded-3xl shadow-2xl p-4 transition-all duration-300">
                        <div className="h-full rounded-2xl overflow-hidden hover:shadow-indigo-200">
                            <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                                🤖 Chatbot
                            </h2>
                            <Chatbot />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onFileUploaded={handleFileUploaded}
            />
            <Foot />
        </>
    );
}
