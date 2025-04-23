import {Link} from "react-scroll";

export default function ScrollButton() {
    return (
        <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-30}
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
        >
            <button className={"bg-red-500 rounded-xl fixed right-8 bottom-8 w-12 h-12 text-2xl font-bold hover:bg-red-400"}>
                ↑
            </button>
        </Link>
    );
}