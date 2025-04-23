import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className="hidden sm:flex justify-center w-full fixed top-0 left-0  backdrop-blur-md text-white py-4 z-50 shadow-md">
            <nav className="flex items-center gap-8 text-sm sm:text-base font-medium">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    About Me
                </Link>
                {/*<Link*/}
                {/*    to="experience"*/}
                {/*    smooth={true}*/}
                {/*    duration={500}*/}
                {/*    offset={-30}*/}
                {/*    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"*/}
                {/*>*/}
                {/*    Experience*/}
                {/*</Link>*/}
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-60}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    Skills
                </Link>
                <Link
                    to="achievements"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    Achievements
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={10}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-30}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
