export default function Languages() {
    const languages = [
        { src: "src/assets/languages/python-programming-language.webp", alt: "Python" },
        { src: "src/assets/languages/js.png", alt: "JavaScript" },
        { src: "src/assets/languages/ts.png", alt: "TypeScript" },
        { src: "src/assets/languages/css.png", alt: "CSS" },
        { src: "src/assets/languages/sql.png", alt: "SQL" },
        { src: "src/assets/languages/html.png", alt: "HTML" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-30 md:pt-0">
            <h2 className="text-4xl italic font-bold mb-10 text-center relative bottom-20">Languages</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-30 gap-x-60">
                {languages.map(({ src, alt }) => (
                    <div key={alt} className="flex flex-col items-center space-y-2">
                        <img src={src} alt={alt} className="w-24 h-24 object-contain rounded-3xl" />
                        <span className="text-lg font-medium">{alt}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
