import NavBar from "../components/NavBar.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Languages from "../components/Languages.tsx";
import Contact from "../components/Contact.tsx";
import ScrollButton from "../components/ScrollButton.tsx";
import Skills from "../components/Skills.tsx";

export default function MainPage() {
    return (
        <>
            <NavBar />
            <div className={"h-screen snap-y snap-mandatory"}>
                <Home/>
                <About/>
                <Languages/>
                <Skills/>
                <Contact/>
                <ScrollButton/>
            </div>
        </>
    );
}