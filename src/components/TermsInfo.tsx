"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TermsPage: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Terms of Service
                    </h1>
                </div>

                {[
                    {
                        title: "Welcome",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                Welcome to <span className="font-semibold text-gray-900">Retrievia</span>.
                                These Terms of Service (“Terms”) govern your access to and use of the
                                Retrievia platform, including our website, products, software, and any
                                related services (collectively, the “Service”).
                                By accessing or using Retrievia, you agree to be bound by these Terms.
                                If you do not agree, please discontinue use of the Service immediately.
                            </p>
                        )
                    },
                    {
                        title: "1. Acceptance of Terms",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                By creating an account, using our AI research tools, or otherwise engaging
                                with Retrievia, you acknowledge that you have read, understood, and agree to
                                these Terms, as well as our{" "}
                                <button
                                    onClick={() => handleNavigation("/privacy")}
                                    className="text-blue-600 hover:underline hover:cursor-pointer"
                                >
                                    Privacy Policy
                                </button>.
                                If you are using Retrievia on behalf of an organization, you confirm that
                                you have authority to bind that organization to these Terms.
                            </p>
                        )
                    },
                    {
                        title: "2. Use of the Service",
                        content: (
                            <>
                                <p className="text-base sm:text-lg mb-4">
                                    You agree to use Retrievia only for lawful purposes and in accordance with
                                    these Terms. You must not:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                                    <li>Use the Service in a manner that violates any applicable laws or regulations.</li>
                                    <li>Reverse engineer, decompile, or attempt to extract source code from our systems.</li>
                                    <li>Upload, post, or distribute content that is illegal, harmful, or infringes the rights of others.</li>
                                    <li>Interfere with the security, performance, or integrity of the Service.</li>
                                    <li>Use automated tools (bots, scrapers, etc.) to access or collect data without authorization.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        title: "3. Accounts and Security",
                        content: (
                            <>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    To access certain features, you may need to create an account. You agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg mt-2">
                                    <li>Provide accurate, current, and complete information during registration.</li>
                                    <li>Maintain the confidentiality of your account credentials.</li>
                                    <li>Notify us immediately if you suspect unauthorized use of your account.</li>
                                </ul>
                                <p className="mt-4 text-base sm:text-lg leading-relaxed">
                                    Retrievia is not liable for any loss or damage resulting from unauthorized account access.
                                </p>
                            </>
                        )
                    },
                    {
                        title: "4. Intellectual Property Rights",
                        content: (
                            <>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    All intellectual property rights in Retrievia, including software, design, text, graphics,
                                    logos, and AI-generated outputs, are owned by or licensed to Retrievia. You may not
                                    reproduce, distribute, or modify any part of the Service without express written
                                    permission.
                                </p>
                                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                                    You retain ownership of any data or content you submit, but grant Retrievia a limited,
                                    worldwide, royalty-free license to process and use that data solely to provide the Service.
                                </p>
                            </>
                        )
                    },
                    {
                        title: "5. Subscription, Fees, and Payments",
                        content: (
                            <>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    Certain Retrievia features or plans may require payment. By subscribing, you agree to
                                    pay all applicable fees according to your selected plan. Payments are non-refundable
                                    except where required by law.
                                </p>
                                <p className="mt-3 text-base sm:text-lg leading-relaxed">
                                    Retrievia reserves the right to modify pricing, plans, or features at any time, with notice
                                    provided before changes take effect.
                                </p>
                            </>
                        )
                    },
                    {
                        title: "6. Termination",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                We reserve the right to suspend or terminate your account and access to the Service at
                                our discretion, without notice, if you violate these Terms or engage in conduct harmful
                                to Retrievia or other users. Upon termination, all rights granted to you under these Terms
                                will immediately cease.
                            </p>
                        )
                    },
                    {
                        title: "7. Disclaimer of Warranties",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                The Service is provided “as is” and “as available.” Retrievia makes no warranties, express
                                or implied, regarding reliability, accuracy, or availability. We do not guarantee that
                                the Service will be uninterrupted or error-free.
                            </p>
                        )
                    },
                    {
                        title: "8. Limitation of Liability",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                To the fullest extent permitted by law, Retrievia shall not be liable for any indirect,
                                incidental, or consequential damages, including loss of profits, data, or business
                                opportunities, arising out of or related to your use of the Service.
                            </p>
                        )
                    },
                    {
                        title: "9. Indemnification",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                You agree to indemnify and hold harmless Retrievia, its affiliates, officers, employees,
                                and partners from any claims, damages, or liabilities arising from your use of the
                                Service or your violation of these Terms.
                            </p>
                        )
                    },
                    {
                        title: "10. Governing Law and Dispute Resolution",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of your
                                jurisdiction, without regard to conflict of law principles. Any disputes arising under
                                or in connection with these Terms shall be subject to the exclusive jurisdiction of the
                                courts located in your region.
                            </p>
                        )
                    },
                    {
                        title: "11. Changes to These Terms",
                        content: (
                            <p className="text-base sm:text-lg leading-relaxed">
                                We may update or modify these Terms from time to time. When changes occur, the updated
                                Terms will be posted here with a new “Last updated” date. Continued use of the Service
                                after such changes constitutes acceptance of the new Terms.
                            </p>
                        )
                    },
                    {
                        title: "12. Contact Us",
                        content: (
                            <>
                                <p className="text-base sm:text-lg leading-relaxed">
                                    For any questions or concerns about these Terms, please contact us:
                                </p>
                                <div className="mt-4 bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                                    <p className="font-medium text-gray-900">Retrievia Legal Team</p>
                                    <p>Email: <a href="mailto:legal@retrievia.ai" className="text-blue-600 hover:underline break-words">legal@retrievia.ai</a></p>
                                </div>
                            </>
                        )
                    }
                ].map(({ title, content }, index) => (
                    <section key={index} className="mb-12 last:mb-0">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
                        {content}
                    </section>
                ))}
            </div>
        </main>
    );
};

export default TermsPage;