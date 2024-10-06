import React from "react";
import MobileLandingPage from "./components/Mobile/MobileLandingPage";
import {motion, useScroll, useSpring} from "framer-motion";
import MobileCharts from "./components/Mobile/MobileCharts";
import SwipeArrow from "./components/Mobile/SwipeArrow";
const MobileLayout = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return <>
        <>
            <MobileLandingPage />
            {[1, 2, 3].map((id) => (
                <MobileCharts key={id} id={id} jsonFileName={"./mobileDashboards.json"} />
            ))}
            <SwipeArrow/>
            <motion.div className="progressBar" style={{ scaleX }} />
        </>
    </>
}

export default MobileLayout;