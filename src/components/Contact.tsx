import { Element } from "react-scroll"

export default function Contact() {
    const phone = "+233 55 920 3950"
    const email = "peymensah@gmail.com"

    return (
        <Element name="contact">
            <div className="min-h-screen snap-start flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-2 pb-10">Contact Me</h2>
                <h3 className="text-2xl mb-4 italic text-center pb-10  opacity-30">Let's Work Together</h3>
                <p className="text-center max-w-xl mb-6 text-gray-300 pb-10">
                    I'm always excited to collaborate, learn, and build amazing things. Feel free to reach out for work,
                    learning partnerships, or just a friendly chat!
                </p>

                <div className="mb-6 text-center">
                    <p className="text-lg font-medium pb-5">📧 <a href={`mailto:${email}`}
                                                            className="underline hover:text-blue-400">
                        {email}</a>
                    </p>
                    <p className="text-lg font-medium">📞 {phone}</p>
                </div>

                <a href={`mailto:${email}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mb-8 transition duration-300">
                        Let's Chat
                    </button>
                </a>

                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/philemon-mensah-b7124030b" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/social/linkedin.png"
                             alt="LinkedIn"
                             className="w-8 h-8 hover:scale-110 transition rounded-full" />
                    </a>
                    <a href="https://github.com/GamerGbesh" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/social/github.png"
                             alt="GitHub"
                             className="w-8 h-8 hover:scale-110 transition rounded-full" />
                    </a>
                    <a href="https://www.snapchat.com/add/gbeshko?share_id=8SPs9zxLbG8&locale=en-EN" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/social/snapchat.png"
                             alt="Snapchat"
                             className="w-8 h-8 hover:scale-110 transition rounded-full" />
                    </a>
                    <img src="/assets/social/WhatsApp.svg.webp"
                         alt="Whatsapp"
                         className="w-8 h-8 hover:scale-110 transition"
                    onClick={() => {
                        alert(`My whatsapp number is ${phone}`)
                    }}
                    />
                </div>
            </div>
        </Element>
    );
}
