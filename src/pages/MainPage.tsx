import NavBar from "../components/NavBar.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Languages from "../components/Languages.tsx";
import Contact from "../components/Contact.tsx";
import ScrollButton from "../components/ScrollButton.tsx";
import Skills from "../components/Skills.tsx";
import Projects from "../components/Projects.tsx";
import Achievements from "../components/Achievements.tsx";

export default function MainPage() {
  return (
    <>
      <NavBar />
      <div className="snap-y snap-proximity">
        <Home />
        <About />
        <Languages />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <ScrollButton />
        <footer className="w-full py-6 bg-white/10 backdrop-blur-lg border-t border-white/20 text-center text-gray-300 text-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto px-4 gap-2">
            <span>
              &copy; {new Date().getFullYear()} Philemon Mensah. All rights
              reserved.
            </span>
            <span className="flex gap-4 justify-center mt-2 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/philemon-mensah-b7124030b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/GamerGbesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:peymensah@gmail.com"
                className="hover:text-green-400 transition-colors"
              >
                Email
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
