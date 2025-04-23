interface Props {
    link: string;
    category: string;
    title: string;
    image: string;
}

export default function ProjectCard({ link, category, title, image }: Props) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
            <div className="w-full h-80 bg-gray-800 rounded-2xl overflow-hidden shadow-lg
            transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover object-center"
                />
                <div className="p-4 text-white">
                    <p className="text-sm text-blue-400 uppercase tracking-wide">{category}</p>
                    <h3 className="text-xl font-semibold mt-1">{title}</h3>
                </div>
            </div>
        </a>
    );
}
