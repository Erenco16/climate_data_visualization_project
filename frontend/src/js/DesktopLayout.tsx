import React, {useState} from "react";
import {motion, useScroll, useSpring} from "framer-motion";
import LandingPage from "./components/Desktop/LandingPage";

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
            <motion.div className="progressBar" style={{ scaleX }} />
        </>
    )
}

export default DesktopLayout;