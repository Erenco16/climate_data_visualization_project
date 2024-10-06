import React, {useState} from "react";
import {motion, useScroll, useSpring} from "framer-motion";
import LandingPage from "./components/Desktop/LandingPage";
import DesktopFooter from "./components/Desktop/DesktopFooter";

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
            <DesktopFooter/>
        </>
    )
}

export default DesktopLayout;