import SkillCard from "./SkillCard.tsx";
import { Element } from "react-scroll";

export default function Skills() {
  const skills = [
    {
      name: "Backend Engineering & APIs",
      description:
        "Production experience building RESTful APIs with Django and FastAPI. Expertise in PostgreSQL database design, " +
        "query optimization, and backend architecture. Migrated systems from MongoDB to PostgreSQL with 1000x latency improvements (<10min → <1s).",
      image: "/assets/skills/django.png",
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
        "Engineered large-scale data cleaning and normalization pipelines. Dockerized backend services, " +
        "implemented CI/CD with GitHub Actions, and built comprehensive unit & integration test suites. Experience with data preprocessing and ETL workflows.",
      image: "/assets/skills/data_pipeline.png",
    },
  ];

  return (
    <Element name={"skills"}>
      <div className="min-h-screen snap-start flex flex-col items-center justify-center px-4 md:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            My Skills
          </h2>
          <p className="text-gray-400 text-base">
            Core expertise in backend engineering, AI systems, and data
            infrastructure
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full max-w-6xl">
          {skills.map(({ name, description, image }) => (
            <SkillCard
              key={name}
              name={name}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}
