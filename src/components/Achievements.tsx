import {Element} from "react-scroll";
import ProjectCard from "./ProjectCard.tsx";

export default function Achievements() {
    const achievements = [
        {
            title: "1st Place – School-Level Coding Competition",
            category: "Code Competition",
            link: "https://www.linkedin.com/posts/philemon-mensah-b7124030b_coding-competition-smallwins-activity-7297393173251710976-rH0f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7hEoUBrDKDMhdfEfM6gkkzwnD_R0N2x9s",
            image: "src/assets/achievements/competition.jpg",
        },
        {
            title: "Participated in Zindi & Yango Hackathon to Tackle Real-World Tech Challenges",
            category: "Hackathon Participation",
            link: "https://www.linkedin.com/posts/philemon-mensah-b7124030b_hackathonexperience-zindi-yango-activity-7277305555998638080-pLq8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7hEoUBrDKDMhdfEfM6gkkzwnD_R0N2x9s",
            image: "src/assets/achievements/hackathon.jpg",
        }

    ]

    return (
        <Element name={"achievements"}>
            <div className="min-h-screen snap-start flex flex-col items-center justify-center pt-20">
                <h2 className="text-4xl text-white italic mb-10">My Achievements</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5 pt-10">
                    {achievements.map(({ title, category, link, image }) => (
                        <ProjectCard key={title} title={title} category={category} link={link} image={image} />
                    ))}
                </div>
            </div>

        </Element>
    );
}