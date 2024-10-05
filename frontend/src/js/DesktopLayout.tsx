import React from "react";
import Header from "./components/Header";
import {motion, useScroll, useSpring} from "framer-motion";
import Intro from "./components/Intro";
import Charts from "./components/Charts";

const DesktopLayout = () => {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // detect scrolls so that we can make the header re-appear
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header-container');
        const firstSection = document.querySelector('section');

        if (header && firstSection) {
            const firstSectionHeight = firstSection.offsetHeight;

            if (window.scrollY > firstSectionHeight) {
                header.classList.add('visible');
            } else if (window.scrollY <= 50) {
                header.classList.remove('visible');
            }
        }
    });
    return (
        <>
            <Header/>
            <Intro />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                        <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))}
            <motion.div className="progressBar" style={{ scaleX }} />
        </>
    )
}

export default DesktopLayout;