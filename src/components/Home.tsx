import { Element } from "react-scroll";
import { motion } from "motion/react";

function Home() {
  return (
    <Element name="home">
      <div className="min-h-screen snap-start flex items-center justify-center text-white relative">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center px-6 z-10 max-w-3xl"
        >
          {/* Avatar */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full blur-2xl opacity-30 animate-pulse-glow scale-110" />
            <div className="relative p-[3px] rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-violet-500">
              <img
                src="/assets/Me.jpg"
                alt="Philemon Mensah"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover bg-gray-900"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
              Philemon
            </span>
          </h1>

          {/* Role pill */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400/80">
              Backend Engineer · AI Systems Developer
            </span>
          </div>

          <p className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-10">
            Building production data pipelines, RAG systems, and&nbsp;scalable APIs
            that turn messy real-world data into clean, fast results.
          </p>

          {/* CTA */}
          <motion.a
            href="/docs/Mensah Philemon's CV.pdf"
            download
            title="Philemon's CV"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden shadow-xl"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
          >
            <span className="relative z-10">Download CV</span>
            <span className="relative z-10 text-base">↓</span>
            {/* shine sweep */}
            <span className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </motion.a>
        </motion.div>
      </div>
    </Element>
  );
}

export default Home;
