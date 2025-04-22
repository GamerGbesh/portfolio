import { Element } from "react-scroll";

export default function Contact() {
    return (
        <Element name="contact">
            <div className="h-screen snap-start flex flex-col items-center justify-center text-white pt-160 md:pt-0">
                <h2 className="text-4xl font-bold mb-2 underline pb-10">Contact Me</h2>
                <h3 className="text-2xl mb-4 italic text-center pb-10">Let's Work Together</h3>
                <p className="text-center max-w-xl mb-6 text-gray-300 pb-10">
                    I'm always excited to collaborate, learn, and build amazing things. Feel free to reach out for work,
                    learning partnerships, or just a friendly chat!
                </p>

                <div className="mb-6 text-center">
                    <p className="text-lg font-medium pb-5">📧 <a href="mailto:peymensah@gmail.com"
                                                            className="underline hover:text-blue-400">
                        peymensah@gmail.com</a>
                    </p>
                    <p className="text-lg font-medium">📞 +233 20 240 9844</p>
                </div>

                <a href="mailto:peymensah@gmail.com">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mb-8 transition duration-300">
                        Let&apos;s Chat
                    </button>
                </a>

                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/philemon-mensah-b7124030b" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    <a href="https://github.com/GamerGbesh" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/github.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                    <a href="https://www.snapchat.com/add/gbeshko?share_id=8SPs9zxLbG8&locale=en-EN" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/snapchat.png" alt="Snapchat" className="w-8 h-8 hover:scale-110 transition" />
                    </a>
                </div>
            </div>
        </Element>
    );
}
