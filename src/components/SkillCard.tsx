interface Props {
    name: string;
    description: string;
    image: string;
}

export default function SkillCard({ name, description, image }: Props) {
    return (
        <div className="w-full sm:w-2/3 mx-auto bg-gray-800 rounded-2xl flex flex-col justify-center items-center
        overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <img
                src={image}
                className="w-28 h-28 relative top-3 rounded-full"
            />

            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
