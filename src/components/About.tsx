import {Element, Link} from "react-scroll";

export default function About() {
    return (
        <Element name="about">
            <div className="h-screen snap-start flex flex-col md:flex-row items-center justify-start px-6 md:px-0 ">
                <div className="pr-0 md:pr-30 w-8/12">
                    <img src="src/assets/ELMA0835.jpg" alt="Philemon" className="rounded-xl shadow-lg"/>
                </div>
                <div className="mt-6 md:mt-0 text-white space-y-4 max-w-xl">
                    <p className="text-2xl font-bold underline underline-offset-4">About Me</p>

                    <p className="text-lg">
                        Hey there! I'm <span className="font-semibold text-blue-300">Philemon Mensah</span>, a sophomore at the University of Ghana
                        majoring in Computer Engineering. I'm passionate about building things with code — especially in the areas of software development and AI/ML.
                    </p>

                    <p className="text-lg">
                        My core strength lies in <span className="font-medium">backend development</span>, particularly using Python and the Django framework.
                        I also have hands-on experience with frontend technologies like React and TypeScript. While I wouldn't call myself a UI/UX expert,
                        I can bring a well-structured design to life with clean, functional code.
                    </p>

                    <p className="text-lg">
                        I've spent a good amount of time working with Django — I wouldn't say I'm an expert yet,
                        but I know how to get things done, and I'm always eager to learn and grow in any area that helps me build better software.
                    </p>

                    <p className="text-lg font-semibold">My interests include:</p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Backend Development</li>
                        <li>Web Development</li>
                        <li>Machine Learning</li>
                    </ol>

                    <button className={"mt-4 px-6 py-2 bg-blue-600 " +
                        "hover:bg-blue-700 text-white rounded-md shadow-md transition-all"}>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-30}
                            className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                        >Contact Me</Link>
                    </button>
                </div>
            </div>
        </Element>
    );
}
