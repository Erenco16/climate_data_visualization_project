import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {useMediaQuery} from "react-responsive";
import Charts from './components/Charts';
import Intro from "./components/Intro";
import '../css/styles.css';
import MobileLayout from "./MobileLayout";

export default function App() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return isTabletOrMobile ?
        (<MobileLayout/>)
        :
        (
            <>
                <Intro />
                {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                    <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
                ))}
                <motion.div className="progressBar" style={{ scaleX }} />
            </>
        );

}
