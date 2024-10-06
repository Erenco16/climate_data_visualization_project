import React, {useEffect, useRef, useState} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";


function Parallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
const Charts = ({ id , jsonFileName, titles, texts}: { id: number , jsonFileName: string, titles: Array<string>, texts: Array<string>}) => {
    const [iframes, setIframes] = useState<Array<any>>([]);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = Parallax(scrollYProgress, 300);



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