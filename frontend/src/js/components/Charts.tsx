import React, {useEffect, useRef, useState} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";


function Parallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
const Charts = ({ id }: { id: number }) => {
    const [iframes, setIframes] = useState<Array<any>>([]);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = Parallax(scrollYProgress, 300);

    const titles = ["BS chart 1", "BS chart 2","BS chart 3", "BS chart 4", "BS chart 5", "BS chart 6","BS chart 7"];
    const texts = ["A lot of work for a non-UI/UX student", "Like seriously", "A lot of work for a non-UI/UX student", "Like seriously", "A lot of work for a non-UI/UX student", "Like seriously", "A lot of work for a non-UI/UX student"];

    // Fetch the iframe data when the component mounts
    useEffect(() => {
        fetch('/dashboards.json')
            .then(response => response.json())
            .then(data => {
                setIframes(data.embeds);
                console.log(data.embeds);
            })
            .catch(error => {
                console.error("Error loading the dashboards json file: ", error);
            });
    }, []);

    return (
        <div className = "section-wrapper">
            <section>
                <h1>{titles[id - 1]}</h1>
                <motion.h2 style={{y}}>{texts[id - 1]}</motion.h2>
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