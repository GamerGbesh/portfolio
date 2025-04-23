import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
    const projects = [
        {
            title: "AI-Powered Educational Web App with RAG using LangChain and LangGraph",
            category: "Web Development · AI",
            link: "https://www.linkedin.com/posts/philemon-mensah-b7124030b_rag-langgraph-react-activity-7317279164187795457-WIcQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7hEoUBrDKDMhdfEfM6gkkzwnD_R0N2x9s",
            image: "/assets/projects/Screenshot 2025-04-09 182152.png"
        },
        {
            title: "Sperm Viability Detection using Computer Vision",
            category: "Machine Learning",
            link: "https://github.com/GamerGbesh/SMIDS.git",
            image: "/assets/projects/Screenshot 2025-04-23 210707.png"
        },
        {
            title: "Deployed Full-Stack Credit Union Web App for Contribution Management",
            category: "Web Development",
            link: "https://github.com/GamerGbesh/credit_union.git",
            image: "/assets/projects/credit_union.jpg"
        },
        {
            title: "Ship Classification with a Custom Computer Vision Model",
            category: "Machine Learning",
            link: "https://github.com/GamerGbesh/ship_cnn_classification",
            image: "/assets/projects/ships.png"
        }
    ];


    return (
        <Element name="projects">
            <div className="min-h-screen snap-start flex flex-col items-center justify-center pt-20">
                <h2 className="text-4xl text-white italic mb-10">My Projects</h2>
                <p className="pt-2 opacity-35 text-red-200 text-xl">Some of my projects include</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5 pt-10">
                    {projects.map(({ title, category, link, image }) => (
                        <ProjectCard key={title} title={title} category={category} link={link} image={image} />
                    ))}
                </div>
            </div>
        </Element>
    );
}
