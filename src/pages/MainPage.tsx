import NavBar from "../components/NavBar.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Languages from "../components/Languages.tsx";
import Contact from "../components/Contact.tsx";
import ScrollButton from "../components/ScrollButton.tsx";
import Skills from "../components/Skills.tsx";
import Projects from "../components/Projects.tsx";
import Achievements from "../components/Achievements.tsx";

const symbols = ["{", "}", "<", ">", "(", ")", ";", "/", "=>", "fn", "::", "$", "->", "=="];

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Continuous ambient glow orbs across the viewport */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[140px]" />
      <div className="absolute top-[25%] -right-[10%] w-[550px] h-[550px] rounded-full bg-violet-500/[0.06] blur-[140px]" />
      <div className="absolute top-[60%] -left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      <div className="absolute -bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-500/[0.06] blur-[140px]" />

      {/* Floating code symbols flowing across the entire screen continuously */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/[0.03] animate-float font-mono select-none"
            style={{
              left: `${(i * 4.1 + 3) % 96}%`,
              top: `${(i * 4.3 + 7) % 94}%`,
              animationDelay: `${(i * 1.7) % 22}s`,
              animationDuration: `${20 + (i % 6) * 3}s`,
              fontSize: `${0.85 + (i % 4) * 0.25}rem`,
            }}
          >
            {symbols[i % symbols.length]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="relative min-h-screen bg-[#050508]">
      <BackgroundEffects />
      <NavBar />
      <div className="relative z-10 snap-y snap-proximity">
        <Home />
        <About />
        <Languages />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <ScrollButton />

        <footer
          className="w-full py-6 text-center text-xs text-white/25 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(5,5,8,0.6)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto px-6 gap-3">
            <span>© {new Date().getFullYear()} Philemon Mensah. All rights reserved.</span>
            <span className="flex gap-5">
              <a href="https://www.linkedin.com/in/philemon-mensah-b7124030b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
              <a href="https://github.com/GamerGbesh" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors duration-200">GitHub</a>
              <a href="mailto:peymensah@gmail.com" className="hover:text-cyan-400 transition-colors duration-200">Email</a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
