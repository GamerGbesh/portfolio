import SkillCard from "./SkillCard.tsx";
import {Element} from "react-scroll";

export default function Skills() {
    const skills = [
        {
            name: "Backend Development",
            description: "Built RESTful APIs using Django, with a focus on scalability, " +
                "database design, and integration with React frontends.",
            image: "/assets/skills/django.png",
        },
        {
            name: "Frontend Development",
            description: "Developed interactive UIs using React with JavaScript and TypeScript, " +
                "implementing responsive layouts and reusable components.",
            image: "/assets/skills/react.svg",
        },
        {
            name: "Machine Learning",
            description: "Applied foundational machine learning techniques using Python, including data preprocessing, " +
                "model training, and evaluation.",
            image: "/assets/skills/ml.jpg",
        },

    ];

    return (
        <Element name={"skills"}>
            <div className="min-h-screen snap-start">
                <p className={"text-4xl italic pb-10 font-bold"}>My Skills</p>
                <div className="flex flex-col gap-5">
                    {skills.map(({ name, description, image }) => (
                        <SkillCard key={name} name={name} description={description} image={image} />
                    ))}
                </div>
            </div>
        </Element>
    );
}
