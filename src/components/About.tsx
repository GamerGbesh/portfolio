import { motion } from "motion/react";
import { Element, Link } from "react-scroll";

export default function About() {
  const focuses = [
    { label: "Backend Engineering", detail: "Python · Django · FastAPI · PostgreSQL" },
    { label: "AI/ML Systems",       detail: "RAG · Transformers · Vector Databases" },
    { label: "Data Infrastructure", detail: "Docker · CI/CD · ETL Pipelines" },
  ];

  return (
    <Element name="about">
      <div className="min-h-screen snap-start flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-20">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-5/12 max-w-xs flex-shrink-0"
        >
          <div className="relative">
            {/* glow behind photo */}
            <div className="absolute inset-0 rounded-3xl blur-2xl scale-95 opacity-40"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }} />
            <div className="relative p-[2px] rounded-3xl"
              style={{ background: "linear-gradient(135deg,rgba(99,179,237,0.4),rgba(183,148,244,0.4))" }}>
              <img
                src="/assets/Me.jpg"
                alt="Philemon Mensah"
                className="w-full rounded-[22px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-white space-y-6 w-full md:w-7/12 max-w-xl"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/70 mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Philemon Mensah
            </h2>
          </div>

          <p className="text-white/65 leading-relaxed">
            Sophomore Computer Engineering student at the{" "}
            <span className="text-white/90 font-medium">University of Ghana</span>{" "}
            (First Class Standing), specialising in{" "}
            <span className="text-blue-300 font-medium">backend engineering</span> and{" "}
            <span className="text-violet-300 font-medium">applied AI systems</span>.
          </p>

          <p className="text-white/65 leading-relaxed">
            Currently an <span className="text-white/90 font-medium">AI Intern at Remotown</span> — designed
            and deployed production data pipelines for job and company canonicalization, built RAG systems
            with vector databases (Qdrant, pgvector), migrated backends from MongoDB to PostgreSQL
            achieving <span className="text-cyan-300 font-semibold">1000× latency improvements</span>, and
            implemented CI/CD workflows end to end.
          </p>

          {/* Focus areas */}
          <div className="space-y-2.5 pt-1">
            {focuses.map(({ label, detail }) => (
              <div key={label}
                className="flex items-start gap-3 p-3.5 rounded-xl border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 flex-shrink-0" style={{ marginTop: "0.4rem" }} />
                <div>
                  <p className="text-sm font-semibold text-white/90">{label}</p>
                  <p className="text-xs text-white/40 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="contact" smooth duration={500} offset={-30}>
            <button
              className="mt-2 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", boxShadow: "0 4px 24px rgba(99,102,241,0.3)" }}
            >
              Get In Touch →
            </button>
          </Link>
        </motion.div>

      </div>
    </Element>
  );
}
