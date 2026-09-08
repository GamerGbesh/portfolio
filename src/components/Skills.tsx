import SkillCard from "./SkillCard.tsx";
import { Element } from "react-scroll";

export default function Skills() {
  const skills = [
    {
      name: "Backend Engineering & APIs",
      description:
        "Production experience building RESTful APIs with FastAPI and Django. Expertise in PostgreSQL database design, " +
        "query optimisation, and backend architecture. Migrated systems from MongoDB to PostgreSQL with 1000x latency improvements (<10min → <1s).",
      image: "/assets/skills/fastapi.svg",
    },
    {
      name: "AI/ML & RAG Systems",
      description:
        "Designed and deployed RAG pipelines with transformer models (pretrained + fine-tuned). " +
        "Built production entity canonicalization systems using vector databases (Qdrant, pgvector, Chroma) for semantic search and retrieval.",
      image: "/assets/skills/ml.jpg",
    },
    {
      name: "Data Pipelines & Infrastructure",
      description:
        "Engineered large-scale data cleaning and normalisation pipelines. Dockerized backend services, " +
        "implemented CI/CD with GitHub Actions, and built comprehensive unit & integration test suites. Experience with data preprocessing and ETL workflows.",
      image: "/assets/skills/data_pipeline.png",
    },
  ];

  return (
    <Element name="skills">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center px-4 md:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-white/45 text-sm mt-3 max-w-md mx-auto">
            Core expertise across backend engineering, AI systems, and data infrastructure
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-5xl">
          {skills.map(({ name, description, image }) => (
            <SkillCard key={name} name={name} description={description} image={image} />
          ))}
        </div>
      </div>
    </Element>
  );
}
