import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard.tsx";

export default function Achievements() {
  const achievements = [
    {
      title: "AI Intern @ Remotown (Production Systems)",
      category: "Professional Experience",
      link: "https://www.linkedin.com/in/philemon-mensah-b7124030b/",
      image: "/assets/achievements/remotown.png",
      description:
        "Designed and deployed production data canonicalization pipelines. Built RAG systems with vector databases (Qdrant). Migrated backend from MongoDB to PostgreSQL with 1000x performance improvement. Implemented CI/CD and comprehensive testing.",
      tech: ["Python", "PostgreSQL", "Qdrant", "RAG", "Docker", "CI/CD"],
    },
    {
      title: "First Class Academic Standing",
      category: "Academic Achievement",
      link: "#education",
      image: "/assets/achievements/academic.png",
      description:
        "Maintaining First Class academic standing in Computer Engineering at University of Ghana. Strong foundation in algorithms, data structures, systems programming, and software engineering.",
      tech: ["Computer Engineering", "Algorithms", "Data Structures"],
    },
    {
      title: "1st Place – School-Level Coding Competition",
      category: "Code Competition",
      link: "https://www.linkedin.com/posts/philemon-mensah-b7124030b_coding-competition-smallwins-activity-7297393173251710976-rH0f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7hEoUBrDKDMhdfEfM6gkkzwnD_R0N2x9s",
      image: "/assets/achievements/competition.jpg",
    },
    {
      title: "Zindi & Yango Hackathon",
      category: "Hackathon",
      link: "https://www.linkedin.com/posts/philemon-mensah-b7124030b_hackathonexperience-zindi-yango-activity-7277305555998638080-pLq8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7hEoUBrDKDMhdfEfM6gkkzwnD_R0N2x9s",
      image: "/assets/achievements/hackathon.jpg",
      description:
        "Participated in real-world tech challenges focusing on ML and data-driven solutions for transportation and logistics problems.",
    },
  ];

  return (
    <Element name="achievements">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center px-4 md:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">Milestones</p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-white/45 text-sm mt-3">Professional milestones and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-6xl">
          {achievements.map(({ title, category, link, image, description, tech }) => (
            <ProjectCard
              key={title}
              title={title}
              category={category}
              link={link}
              image={image}
              description={description}
              tech={tech}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}
