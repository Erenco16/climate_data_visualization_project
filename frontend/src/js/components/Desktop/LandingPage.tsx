import React, {useState, useEffect, useRef, CSSProperties} from "react";
import Header from './Header';
import ViewOne from "./ViewOne";
import ViewTwo from "../Mobile/ViewTwo";
import {motion} from "framer-motion";
import TypingEffect from "../TypingEffect";

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


    // Timmy's part
    const TitleStyle: CSSProperties = {
        fontSize: '70px',
        fontWeight: 'bold',
        color: '#00ED64',
        margin: "0px",
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 20, transition: { duration: 0.5 } }, // Start faded out and slightly below
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },  // Fade in and slide up
        whileHover: { scale: 1.1, transition: { duration: 0.5 } },     // Scale up when hovered
    };


    return (
        <>
            <section>
                <Header />
                <div className="content-container">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 style={TitleStyle}>A Study and Analysis of Climate Change</h1>
                    </motion.div>
                    <motion.div>
                        <TypingEffect
                            text="And a story of how we interpret data"
                            typingSpeed={100}
                            className="fade-in"
                        />
                    </motion.div>
                    <div className="button-container">
                        <motion.button
                            className="b1"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="whileHover"
                            onClick={handleButtonClickOne}
                        >
                            Presentation View
                        </motion.button>
                        <motion.button
                            className="b2"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="whileHover"
                            onClick={handleButtonClickTwo}
                        >
                            Data View
                        </motion.button>
                    </div>
                </div>
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
