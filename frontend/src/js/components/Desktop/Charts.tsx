import React, {useEffect, useRef, useState} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";


function Parallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
const Charts = ({ id , jsonFileName}: { id: number , jsonFileName: string}) => {
    const [iframes, setIframes] = useState<Array<any>>([]);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = Parallax(scrollYProgress, 300);

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

    // Fetch the iframe data when the component mounts
    useEffect(() => {
        fetch(jsonFileName) // Append it to the URL
            .then(response => response.json())
            .then(data => {
                setIframes(data.embeds);
            })
            .catch(error => {
                console.error("Error loading the dashboards json file: ", error);
            });
    }, []);

    return (
        <div className = "section-wrapper">
            <section className="graph-section">
                <h1>{titles[id - 1]}</h1>
                <motion.h3>{texts[id - 1]}</motion.h3>
                <div ref={ref}>
                    {/* Render iframe only if the data is loaded */}
                    {iframes.length > 0 && (
                        <div style={{height: "100%"}}
                            // since we want to directly insert the embed code, we use the dangerouslySetInnerHTML to safely inject that HTML embed code into DOM
                             dangerouslySetInnerHTML={{ __html: iframes[id - 1].embed_code }}
                        />
                    )}
                </div>
            </section>
        </div>
    );
}

export default Charts;