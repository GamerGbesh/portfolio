import NavBar from "../components/NavBar.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Languages from "../components/Languages.tsx";

export default function MainPage() {
    return (
        <>
            <NavBar />
            <div className={"h-screen snap-y snap-mandatory"}>
                <Home/>
                <About/>
                <Languages/>
            </div>
        </>
    );
}