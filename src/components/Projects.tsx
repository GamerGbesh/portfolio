import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
  const projects = [
    {
      title: "Company Name Canonicalization with RAG & Vector Search",
      category: "AI/ML · Data Pipelines · Backend",
      link: "https://github.com/GamerGbesh/company_name_model_usage.git",
      image: "/assets/projects/company_canon.png",
      description:
        "Production AI system for canonicalizing company names in noisy datasets. Implements RAG pipeline with transformer models (pretrained + fine-tuned) and vector databases (Chroma, pgvector, Qdrant) to eliminate duplicates. Processes large-scale data with semantic search for entity resolution.",
      tech: ["Python", "RAG", "Transformers", "Qdrant", "pgvector", "Chroma"],
    },
    {
      title: "Job & Company Data Normalization Pipeline",
      category: "Backend · Data Engineering · AI",
      link: "#remotown-internship",
      image: "/assets/projects/data_pipeline.png",
      description:
        "Designed and deployed production pipelines at Remotown for cleaning and normalizing large-scale job and company data. Integrated Qdrant for vector-based semantic retrieval. Migrated backend from MongoDB to PostgreSQL, reducing request latency from >10 minutes to <1 second. Implemented comprehensive testing and CI/CD with GitHub Actions.",
      tech: [
        "Python",
        "PostgreSQL",
        "Qdrant",
        "Docker",
        "GitHub Actions",
        "RAG",
      ],
    },
    {
      title: "Flask REST API with Database Layer",
      category: "Backend · API Development",
      link: "https://github.com/GamerGbesh/restaurantly.git",
      image: "/assets/projects/flask_api.png",
      description:
        "Clean, minimal Flask API demonstrating backend fundamentals. Implements RESTful endpoints for a restaurant comment system with proper database interaction, request validation, and response handling. Focus on code clarity and API design principles.",
      tech: ["Python", "Flask", "SQL", "REST API"],
    },
    {
      title: "Sperm Viability Detection using Computer Vision",
      category: "Machine Learning · Computer Vision",
      link: "https://github.com/GamerGbesh/SMIDS.git",
      image: "/assets/projects/Screenshot 2025-04-23 210707.png",
      description:
        "Applied computer vision and machine learning for biomedical image analysis. Built custom classification model for automated sperm viability detection from microscopy images.",
      tech: ["Python", "Computer Vision", "Deep Learning"],
    },
  ];

  return (
    <Element name="projects">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center px-4 md:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base">
            Production systems, AI pipelines, and backend infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl">
          {projects.map(
            ({ title, category, link, image, description, tech }) => (
              <ProjectCard
                key={title}
                title={title}
                category={category}
                link={link}
                image={image}
                description={description}
                tech={tech}
              />
            )
          )}
        </div>
      </div>
    </Element>
  );
}
