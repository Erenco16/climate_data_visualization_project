import React from "react";
import MobileLandingPage from "./components/Mobile/MobileLandingPage";
import {motion, useScroll, useSpring} from "framer-motion";
import MobileCharts from "./components/Mobile/MobileCharts";
import SwipeArrow from "./components/Mobile/SwipeArrow";
import MobileFooter from "./components/Mobile/MobileFooter";
const MobileLayout = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const titles = [
        "Positive Graphs",
        "True Data example",
        "Overview Real Data",
        "CO2 Chart",
        "Overview All Charts",
    ];
    const texts = [
        "Data shows CO2, CH4, CO, and water vapor reductions over 10 years. Are our efforts working?",
        "Not quite. Data is powerful, but interpretation matters—2021 looks good, 2023 shows setbacks.",
        "Careful data analysis shows CO2 and CO levels increased over 10 years, worsening warming and toxicity.",
        "Though total CO2 decreases, minimum yearly CO2 and a 31ppm rise since 2011 undermine progress.",
        "The same applies to H2O, CH4, CO emissions—interpret data truthfully, not to fit a narrative."];
    return <>
        <>
            <MobileLandingPage />
            {[1, 2, 3, 4, 5].map((id) => (
                <MobileCharts key={id} id={id} jsonFileName={"./mobileDashboards.json"} titles={titles} texts={texts}/>
            ))}
            <SwipeArrow/>
            <motion.div className="progressBar" style={{ scaleX }} />
            <MobileFooter/>
        </>
    </>
}

export default MobileLayout;