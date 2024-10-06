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

    const titles = [
        "Positive Graphs",
        "True Data example",
        "Overview Real Data",
        "CO2 Chart",
        "Overview All Charts",
    ];
    const texts = [
        "The data shows a significant reduction in CO2, CH4, CO, and water vapor over 10 years across all sites. Could this indicate that our environmental efforts are finally making a difference?",
        "Not quite. It’s like looking for witches—you'll always find them if you try. Data is powerful, but how we read it changes everything. You can see how in the 2021 graph, things look good, but by 2023, we took 2 steps back.",
        "In Fact, when we interpret the data more carefully, it tells a different story. CO2 emissions and CO levels have increased over 10 years. CO2 fuels global warming, and CO, in large amounts, is toxic.",
        "While the total CO2 seems to be decreasing, the minimum yearly CO2 keeps rising. Even with our efforts, this steady increase, plus a 31ppm rise from 2011 to 2022, undermines progress.",
        "he same goes for H2O, CH4, and CO emissions. We can tell different stories from the same data, which is why we must approach climate change with truth, not by shaping data to fit a narrative."];
    return <>
        <>
            <MobileLandingPage />
            {[1, 2, 3, 4, 5].map((id) => (
                <MobileCharts key={id} id={id} jsonFileName={"./mobileDashboards.json"} titles={titles} texts={texts}/>
            ))}
            <SwipeArrow/>
            <motion.div className="progressBar" style={{ scaleX }} />
        </>
    </>
}

export default MobileLayout;