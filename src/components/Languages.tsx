import { Element } from "react-scroll";
import { motion } from "motion/react";

export default function Languages() {
  const technologies = [
    {
      src: "/assets/languages/python-programming-language.webp",
      name: "Python",
      role: "Primary Backend Language",
      category: "Language",
    },
    {
      src: "/assets/languages/rust.png",
      name: "Rust",
      role: "Systems & High Performance",
      category: "Language",
    },
    {
      src: "/assets/languages/postgresql.svg",
      name: "PostgreSQL",
      role: "Relational DB & pgvector",
      category: "Database",
    },
    {
      src: "/assets/languages/fastapi.svg",
      name: "FastAPI",
      role: "Async REST APIs",
      category: "Framework",
    },
    {
      src: "/assets/languages/django.svg",
      name: "Django",
      role: "Backend Architecture & ORM",
      category: "Framework",
    },
    {
      src: "/assets/languages/pytorch.svg",
      name: "PyTorch",
      role: "Deep Learning & Transformers",
      category: "AI / ML",
    },
    {
      src: "/assets/languages/docker.png",
      name: "Docker",
      role: "Containerization & Deploy",
      category: "DevOps",
    },
    {
      src: "/assets/languages/git.png",
      name: "Git",
      role: "Version Control & CI/CD",
      category: "Tooling",
    },
    {
      src: "/assets/languages/linux.svg",
      name: "Linux",
      role: "OS & Server Environments",
      category: "Infrastructure",
    },
    {
      src: "/assets/languages/redis.svg",
      name: "Redis",
      role: "Caching & Fast In-Memory",
      category: "Database",
    },
  ];

  const domains = [
    "RAG & Vector Search (Qdrant, pgvector, Chroma)",
    "API Design & Optimization",
    "ETL & Data Canonicalization",
    "Microservices & Docker",
  ];

  return (
    <Element name="technologies">
      <div className="min-h-screen snap-start flex flex-col items-center justify-center px-4 md:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-white/45 text-sm mt-3 max-w-lg mx-auto">
            Core programming languages, frameworks, vector stores, and infrastructure powering my systems
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 w-full max-w-6xl mb-8">
          {technologies.map(({ src, name, role, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-5 rounded-2xl flex flex-col items-center text-center border group transition-all duration-300"
              style={{
                background: "linear-gradient(150deg, rgba(13,13,20,0.92), rgba(20,20,32,0.85))",
                borderColor: "rgba(255,255,255,0.07)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(99,179,237,0.35), 0 8px 28px rgba(99,179,237,0.12)",
                }}
              />

              {/* Category chip */}
              <span
                className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full mb-3 text-cyan-400/80"
                style={{
                  background: "rgba(79,209,197,0.08)",
                  border: "1px solid rgba(79,209,197,0.18)",
                }}
              >
                {category}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center p-2.5 mb-3 bg-white/[0.03] border border-white/[0.06] group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <img src={src} alt={name} className="w-full h-full object-contain" />
              </div>

              {/* Title & Role */}
              <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                {name}
              </h3>
              <p className="text-[11px] text-white/45 mt-1 leading-snug font-medium line-clamp-2">
                {role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom domain pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl px-2">
          {domains.map((domain) => (
            <span
              key={domain}
              className="text-xs font-medium text-white/50 px-3.5 py-1.5 rounded-full border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              ✦ {domain}
            </span>
          ))}
        </div>
      </div>
    </Element>
  );
}
