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
        "BS chart 5",
        "BS chart 6",
        "BS chart 7"];
    const texts = [
        "Through Data, we can see that the sum of Carbon Dioxide (CO2), Methane (CH4), Carbon Monoxide (CO) and Water Vapor Percentage has reduced significantly over the 10-year period of observation. The same results were noted throughout all the recording Sites. Does this mean that the environment is finally healing? That after all the years of commitment and using paper straws that we are finally seeing the fruits of our effort?",
        "No, unfortunately. But this is a testament to the age old saying of “if you go hunting for witches, you will find them”.  Data Is a powerful tool but it can both be used for good and bad depending on how we interpret it.  A good example is in the graph you see now, where if we slice the values to 2021, we get an overall positive graph, whereas if we slice it to 2023, we can an overall negative graph.",
        "If we instead look at more correctly interpreted data, we can see that the %H20, Variance of CH4 and Average CO2 levels have all gone up over the past 10 years. What is worse is that when we interact with the z-value or meters above ground value (zmAGL), we find out that the atmosphere closer to us has a high amount of CO2, CH4 and %H2O as time goes on.\n",
        "Although it may seem like overtime, the Total amount of CO2 has gone down (Light Green line), the minimum amount of CO2 emitted per year (Dark Green Line), has gradually increased. As Time goes on, we may be emitting a lesser quantity of CO2, but the Minimum amount of CO2 being emitted has continuously increased, which render out efforts in vain. We can also see that the average CO2 emitted has gone up by nearly 31ppm from 2011 to 2022.",
        "A lot of work for a non-UI/UX student",
        "Like seriously",
        "A lot of work for a non-UI/UX student"];

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
            <section>
                <h1>{titles[id - 1]}</h1>
                <motion.p style={{y}}>{texts[id - 1]}</motion.p>
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