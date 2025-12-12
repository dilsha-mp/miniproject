import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
    {
        image:
            "https://www.freepik.com/premium-photo/various-dishes-arabic-cuisine-table-selective-focus_164863047.htm#fromView=search&page=2&position=28&uuid=200feae8-783e-4657-a191-91c0605dc51f&query=food+image+for+slider",
        title: "Eat Smart. Eat Fresh.",
        subtitle: "Pick your dish and enjoy seamless ordering anytime.",
        buttonText: "View Now",
        position: "left",
    },
    {
        image:
            "https://www.freepik.com/premium-photo/two-burgers-french-fries-juice-black-background_27166441.htm#fromView=search&page=1&position=6&uuid=2e4e88cc-7764-476b-b79a-3a8714bea811&query=fast+food+image+for+slider",
        title: "Hungry? We’ve Got You!",
        subtitle: "From snacks to full meals — delivered super fast.",
        buttonText: "Order Menu",
        position: "left",
    },
];

function HeroSlider() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    function redirectToMenu() {
        navigate("/menu");
    }

    const currentSlide = slides[index];

    return (
        <div className="relative w-full h-72 md:h-[480px] lg:h-[550px] overflow-hidden rounded-xl">

            {/* Slide Image */}
            <img
                src={currentSlide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center"
            />

            {/* Gradient Overlay */}
            <div
                className={`absolute inset-0 pointer-events-none ${currentSlide.position === "left"
                        ? "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
                        : "bg-gradient-to-l from-black/70 via-black/40 to-transparent"
                    }`}
            >
            </div>


            {/* Text Overlay */}
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 text-white max-w-lg space-y-4 ${currentSlide.position === "left"
                    ? "left-6 md:left-16 text-left"
                    : "right-6 md:right-16 text-right"
                    }`}
            >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    {currentSlide.title}
                </h2>

                <p className="text-base md:text-lg lg:text-xl opacity-90">
                    {currentSlide.subtitle}
                </p>

                <button
                    className="mt-3 px-6 py-3 bg-orange-500 rounded-md hover:bg-orange-600 transition-colors font-semibold shadow-md"
                    onClick={() => redirectToMenu(true)}
                >
                    {currentSlide.buttonText}
                </button>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === index ? "bg-white w-4 h-4" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSlider;
