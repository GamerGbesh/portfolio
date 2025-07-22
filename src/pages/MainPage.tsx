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
            <div className={"h-screen snap-y snap-mandatory"}>
                <Home/>
                <About/>
                <Languages/>
                <Skills/>
                <Achievements/>
                <Projects/>
                <Contact/>
                <ScrollButton/>
                <script src="//code.tidio.co/3hasrvib0rykjxxf4h07wvurh6y7wguc.js" async></script>
            </div>
        </>
    );
}