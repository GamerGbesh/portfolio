import { motion } from "motion/react";
import { Element, Link } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <div className="min-h-screen snap-start flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 py-16">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 max-w-sm"
        >
          <img
            src="/assets/Me.jpg"
            alt="Philemon"
            className="rounded-2xl shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
          />
        </motion.div>
        <div className="text-white space-y-4 w-full md:w-7/12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>

          <p className="text-lg">
            I'm{" "}
            <span className="font-semibold text-blue-300">Philemon Mensah</span>
            , a sophomore Computer Engineering student at the University of
            Ghana (First Class Academic Standing). I specialize in{" "}
            <span className="font-medium text-purple-300">
              backend engineering
            </span>{" "}
            and{" "}
            <span className="font-medium text-purple-300">
              applied AI systems
            </span>
            .
          </p>

          <p className="text-lg">
            Currently working as an AI Intern at{" "}
            <span className="font-semibold">Remotown</span>, where I've designed
            and deployed production data pipelines for job and company
            canonicalization. I've built RAG systems with vector databases
            (Qdrant, pgvector), migrated backends from MongoDB to PostgreSQL
            (achieving 1000x latency improvements), and implemented
            comprehensive CI/CD workflows.
          </p>

          <p className="text-lg">
            My work focuses on solving real-world data quality problems at scale
            — from entity resolution using transformer models to building
            high-performance APIs that handle large-scale semantic retrieval.
          </p>

          <p className="text-lg font-semibold">Technical Focus:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Backend Engineering (Python, Django, FastAPI, PostgreSQL)</li>
            <li>AI/ML Systems (RAG, Transformers, Vector Databases)</li>
            <li>Data Pipelines & Infrastructure (Docker, CI/CD, Testing)</li>
          </ol>

          <button
            className={
              "mt-4 px-6 py-2 bg-blue-600 " +
              "hover:bg-blue-700 text-white rounded-md shadow-md transition-all"
            }
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-30}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </Element>
  );
}
