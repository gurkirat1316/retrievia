import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Sales",
        description: "Add product information, competitor analysis, and market research. Retrievia creates a shared knowledge base to help your team make smarter decisions and answer customer questions accurately.",
    },
    {
        title: "Training & onboarding",
        description: "Add training manuals, presentations, and videos. Retrievia helps new hires get up to speed quickly and efficiently while providing consistent access to essential resources.",
    },
    {
        title: "Marketing",
        description: "Add blog posts, reports, and webinars. Retrievia transforms existing content into engaging materials, helping your team create campaigns consistently and effectively.",
    },
    {
        title: "Teaching & learning",
        description: "Add strategy plans, education standards, lecture notes, and readings. Retrievia generates summaries, lesson plans, study guides, discussion questions, and quizzes efficiently.",
    },
    {
        title: "Customer support",
        description: "Add help center articles, FAQs, and product documentation. Retrievia quickly sources accurate answers, helping your team resolve customer questions faster and more reliably.",
    },
    {
        title: "Development",
        description: "Add product specifications, design documents, and user feedback. Retrievia centralizes information to help your team make informed decisions and accelerate product development efficiently.",
    },
];

