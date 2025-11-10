import React from 'react';
import { CardHoverEffectDemo } from './AboutCard';
import Foot from './Foot';

const AboutInfo: React.FC = () => {
    return (
        <>
            <div className="text-center my-16 px-4 mt-32 mb-24">
                <h1 className="text-8xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">Retrievia</h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Power users, teams, and organizations, upgrade to Pro for the most capable AI research
                    and thinking partner.
                </p>
            </div>
            <div>
                <p className="text-4xl max-w-3xl mx-auto leading-relaxed text-center">Unlock premium features</p>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-6 bg-white mx-32">
                    <div className="flex-1 rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 bg-white hover:shadow-md transition">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Retrievia</h2>
                        <p className="text-blue-600 text-sm font-medium mb-6">
                            Free for individuals to get started
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✔</span>
                                Built with the latest Gemini models
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✔</span>
                                Upload PDFs, Custom texts, Google Docs, Website URLs, and more
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✔</span>
                                Create one-click AI generated summaries and briefing docs
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-3 me-2 mb-2 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:cursor-pointer"
                        >
                            Get Started for free
                        </button>
                    </div>

                    <div className="flex-1 rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 bg-white relative overflow-hidden hover:shadow-xl transition">
                        <div className="absolute inset-0 bg-green-100 opacity-30 blur-3xl"></div>

                        <div className="relative">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                                Retrievia in Pro
                            </h2>
                            <div className="bg-green-200 text-green-900 text-sm font-medium px-3 py-1 rounded-md inline-flex items-center mb-6">
                                ⚡ Everything in Retrievia, plus the following:
                            </div>

                            <ul className="space-y-3 text-gray-700 relative">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✔</span>
                                    Access to premium features
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✔</span>
                                    Additional privacy and security
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✔</span>
                                    Unlimited document uploads including PDFs, Google Docs, Slides, and URLs
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✔</span>
                                    Advanced AI summarization and timeline generation
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✔</span>
                                    Priority support and faster query responses
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-30 text-center mb-20'>
                <p className='text-4xl'>How NotebookLM can work for you and your organization</p>
                <CardHoverEffectDemo />
            </div>
            <div>
                <Foot />
            </div>
        </>
    );
};

export default AboutInfo;
