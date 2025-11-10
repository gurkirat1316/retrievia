'use client';
import React, { useState } from 'react';

interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

const Chatbot: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const welcomeMessage =
        "Hello!! I am a RAG System and I have the capabilities to answer your questions based on the data you provide.";

    const API_URL = `/api/chatting`; // keep relative for Next.js API route

    // Function to call backend API
    const getModelResponse = async (fullConversation: Message[]): Promise<string> => {
        if (fullConversation.length === 0) {
            console.error("Messages array is empty.");
            return "No messages to send.";
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullConversation }),
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error("API response error text:", errText);
                throw new Error(`API request failed with status: ${response.status}`);
            }

            const data = await response.json();
            return data.content || "No content in response.";
        } catch (error) {
            console.error('Error calling API:', error);
            return "Failed to get response from API.";
        }
    };

    // Handle sending message
    const handleSend = async (): Promise<void> => {
        if (input.trim() === '') return;

        const userMessage: Message = { role: 'user', content: input.trim() };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);

        try {
            // full conversation includes system or previous context if needed
            const fullConversation: Message[] = [
                { role: 'system', content: welcomeMessage },
                ...updatedMessages,
            ];

            const reply = await getModelResponse(fullConversation);
            const assistantMessage: Message = { role: 'assistant', content: reply };
            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error in handleSend:", error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Something went wrong !!' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 space-y-6">
                <div className="h-96 overflow-y-auto space-y-4 border border-gray-200 p-4 rounded-md bg-gray-50">
                    <div className="p-3 rounded-md text-md bg-indigo-100 text-left self-start">
                        {welcomeMessage}
                    </div>

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-md text-md ${msg.role === 'assistant'
                                ? 'bg-indigo-100 text-left self-start'
                                : 'bg-green-100 text-right self-end ml-auto'
                                }`}
                        >
                            {msg.content}
                        </div>
                    ))}

                    {loading && (
                        <div className="text-gray-500 italic text-md">Typing...</div>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <div className="border border-gray-300 rounded-md px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-indigo-500">
                        <textarea
                            rows={1}
                            style={{ maxHeight: '140px', overflowY: 'auto' }}
                            className="w-full resize-none outline-none text-sm leading-relaxed placeholder-gray-500"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                e.target.style.height = 'auto';
                                const maxHeight = 140;
                                if (e.target.scrollHeight < maxHeight) {
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                } else {
                                    e.target.style.height = `${maxHeight}px`;
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey && !loading) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            disabled={loading}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handleSend}
                            disabled={loading}
                            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 text-sm font-medium"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
