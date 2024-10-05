import React from "react";
import Intro from "./components/Intro";
import Charts from "./components/Charts";
import {motion, useScroll, useSpring} from "framer-motion";
import MobileCharts from "./components/MobileCharts";

const MobileLayout = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return <>
        <>
            <Intro />
            {[1, 2, 3].map((id) => (
                <MobileCharts key={id} id={id} jsonFileName={"./mobileDashboards.json"} />
            ))}
            <motion.div className="progressBar" style={{ scaleX }} />
        </>
    </>
}

export default MobileLayout;