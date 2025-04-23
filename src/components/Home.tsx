import { Element } from "react-scroll";

function Home() {
    return (
        <Element name="home">
            <div className="min-h-screen snap-start flex items-center justify-center text-white home">

                <div className="absolute inset-0 z-0 animate-bgSymbols pointer-events-none">
                    {[...Array(25)].map((_, i) => (
                        <span
                            key={i}
                            className="absolute text-white text-opacity-10 text-2xl animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                fontFamily: 'monospace'
                            }}
                        >
                            {["{", "}", "<", ">", "(", ")", ";", "/"].sort(() => 0.5 - Math.random())[0]}
                        </span>
                    ))}
                </div>
                <div className="flex flex-col items-center text-center px-6 z-10">
                    <p className="p-2 italic text-4xl text-blue-400">Welcome 👋</p>
                    <p className="p-3 text-5xl sm:text-6xl font-bold tracking-wide">
                        I'm <span className="text-blue-500">Philemon</span>
                    </p>
                    <p className="p-2 pt-4 text-lg sm:text-xl italic text-gray-300 max-w-xl">
                        An aspiring Software Developer and passionate AI/ML enthusiast —
                        building the future, one line of code at a time.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition-all">
                        <a href="src/docs/Mensah Philemon's CV.pdf" download title={"Philemon's CV"}>Download CV</a>
                    </button>
                </div>
            </div>
        </Element>
    );
}

export default Home;
