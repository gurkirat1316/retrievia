"use client";

import React from "react";

const PrivacyPolicyPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl lg:max-w-5xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                </div>
                <section className="mb-10 sm:mb-12">
                    <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
                        Welcome to <span className="font-semibold text-gray-900">Retrievia</span>.
                        Your privacy is important to us. This Privacy Policy explains how we collect, use,
                        and protect your personal information when you use our services, website, and applications
                        (collectively, the &quot;Service&quot;). By using Retrievia, you agree to the collection
                        and use of information in accordance with this policy.
                    </p>
                </section>

                {[
                    {
                        title: "1. Information We Collect",
                        content: (
                            <>
                                <p className="mb-4 text-base sm:text-lg">
                                    We collect several types of information to provide and improve our Service to you:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                                    <li>
                                        <span className="font-medium">Personal Information:</span> When you sign up or interact
                                        with Retrievia, we may collect your name, email address, organization details, and payment
                                        information (if applicable).
                                    </li>
                                    <li>
                                        <span className="font-medium">Usage Data:</span> Includes your interactions with our
                                        platform such as pages visited, search queries, and session duration. This helps us
                                        improve user experience and system performance.
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies and Tracking Data:</span> We use cookies,
                                        analytics tools, and session data to understand user preferences and optimize content.
                                    </li>
                                </ul>
                            </>
                        )
                    },
                    {
                        title: "2. How We Use Your Information",
                        content: (
                            <>
                                <p className="mb-4 text-base sm:text-lg">
                                    Retrievia uses collected data to maintain and enhance our services, including but not limited
                                    to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                                    <li>Providing personalized AI research and productivity tools.</li>
                                    <li>Improving our algorithms, user interface, and system reliability.</li>
                                    <li>Sending updates, newsletters, and service-related notifications.</li>
                                    <li>Detecting, preventing, and addressing security or technical issues.</li>
                                    <li>Complying with legal obligations and regulatory requirements.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        title: "3. Data Retention",
                        content: (
                            <p className="text-base sm:text-lg">
                                We retain your personal data only for as long as necessary to fulfill the purposes
                                outlined in this Privacy Policy. You may request deletion of your data at any time by
                                contacting us directly. Upon request, we will remove your personal information unless
                                retention is required by law.
                            </p>
                        )
                    },
                    {
                        title: "4. Data Security",
                        content: (
                            <p className="text-base sm:text-lg">
                                We prioritize the protection of your personal information. Retrievia implements robust
                                technical and organizational measures to secure your data against unauthorized access,
                                alteration, disclosure, or destruction. However, no method of transmission over the
                                internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        )
                    },
                    {
                        title: "5. Sharing Your Data",
                        content: (
                            <>
                                <p className="mb-4 text-base sm:text-lg">
                                    We do not sell, rent, or trade your personal information. However, we may share limited
                                    data in the following situations:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                                    <li>With service providers who support our operations under strict confidentiality terms.</li>
                                    <li>When required by law or to protect the rights, property, or safety of Retrievia, our users, or others.</li>
                                    <li>In connection with a merger, acquisition, or sale of all or a portion of our assets, where user data may be part of the transferred assets.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        title: "6. Cookies and Tracking",
                        content: (
                            <p className="text-base sm:text-lg">
                                Cookies help us analyze web traffic, improve site navigation, and remember user
                                preferences. You can choose to disable cookies through your browser settings, but some
                                parts of the Service may not function properly without them.
                            </p>
                        )
                    },
                    {
                        title: "7. Your Rights",
                        content: (
                            <>
                                <p className="mb-4 text-base sm:text-lg">
                                    Depending on your location, you may have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                                    <li>Access, correct, or delete your personal data.</li>
                                    <li>Withdraw consent to data processing at any time.</li>
                                    <li>Request a copy of your data in a portable format.</li>
                                    <li>File a complaint with a data protection authority if you believe your rights are violated.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        title: "8. Third-\u00A0Party Services",
                        content: (
                            <p className="text-base sm:text-lg">
                                Our Service may contain links to external websites or integrate third-\u00A0party tools.
                                Retrievia is not responsible for the privacy practices or content of such websites. We
                                encourage you to review the privacy policies of any external sites you visit.
                            </p>
                        )
                    },
                    {
                        title: "9. Children&apos;s Privacy",
                        content: (
                            <p className="text-base sm:text-lg">
                                Retrievia does not knowingly collect personal data from individuals under the age of 13.
                                If you believe a child has provided us with personal information, please contact us,
                                and we will take steps to delete such information immediately.
                            </p>
                        )
                    },
                    {
                        title: "10. Changes to This Privacy Policy",
                        content: (
                            <p className="text-base sm:text-lg">
                                We may update this Privacy Policy periodically to reflect changes in our practices or for
                                legal and operational reasons. Updates will be posted on this page with a revised “Last
                                updated” date. We encourage you to review this page regularly to stay informed.
                            </p>
                        )
                    },
                    {
                        title: "11. Contact Us",
                        content: (
                            <>
                                <p className="text-base sm:text-lg">
                                    If you have any questions about this Privacy Policy or our data handling practices,
                                    please contact us at:
                                </p>
                                <div className="mt-4 bg-white shadow-sm rounded-xl p-6 border border-gray-100">
                                    <p className="font-medium text-gray-900">Retrievia Privacy Team</p>
                                    <p>
                                        Email:{" "}
                                        <a
                                            href="mailto:privacy@retrievia.ai"
                                            className="text-blue-600 hover:underline break-words"
                                        >
                                            privacy@retrievia.ai
                                        </a>
                                    </p>
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

export default PrivacyPolicyPage;