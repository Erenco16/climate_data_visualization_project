import React, { useState, useEffect, useRef } from "react";
import Header from './Header';
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";

const LandingPage = () => {
    const [charts, setCharts] = useState<JSX.Element[]>([]);
    const scrollToRef = useRef<HTMLDivElement>(null); // Correct type for ref

    // Disable scrolling on mount
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleButtonClickOne = () => {
        document.body.style.overflow = "auto"; // Allow scrolling
        setCharts([<ViewOne key={0} />]);
        setTimeout(scrollToNextSection, 0);
    };

    const handleButtonClickTwo = () => {
        document.body.style.overflow = "auto"; // Allow scrolling
        setCharts([<ViewTwo key={0} />]);
        setTimeout(scrollToNextSection, 0);
    };

    const scrollToNextSection = () => {
        // Check if the ref is not null
        if (scrollToRef.current) {
            const scrollPosY = scrollToRef.current.getBoundingClientRect().top + window.scrollY; // Calculate absolute Y position
            // Scroll away!
            window.scrollTo({ top: scrollPosY, behavior: 'smooth' }); // Use smooth scrolling
        }
    };

    return (
        <>
            <section>
                <Header />
                <button onClick={handleButtonClickOne}>Button 1</button>
                <button onClick={handleButtonClickTwo}>Button 2</button>
            </section>
            {/* Render the charts only after button clicks */}
            <div ref={scrollToRef}>
                {charts.map((chart, index) => (
                    <div key={index}>{chart}</div>
                ))}
            </div>
        </>
    );
}

export default LandingPage;
