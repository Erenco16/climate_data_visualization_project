import React from "react";
import Header from "./components/Header";
import {motion, useScroll, useSpring} from "framer-motion";
import LandingPage from "./components/LandingPage";
import Charts from "./components/Charts";

const DesktopLayout = () => {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <LandingPage/>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                        <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))} 
             <motion.div className="progressBar" style={{ scaleX }} /> 
        </>
    )
}

export default DesktopLayout;