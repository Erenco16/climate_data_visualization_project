import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const MobileCharts = ({ id, jsonFileName, titles, texts }: { id: number; jsonFileName: string, titles: Array<string>, texts: Array<string> }) => {
    const [iframes, setIframes] = useState<Array<any>>([]);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });


    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Fetch the mobileDashboards.json file on component mount
    useEffect(() => {
        fetch(jsonFileName)
            .then((response) => response.json())
            .then((data) => {
                setIframes(data.embeds); // Store the array of embeds
            })
            .catch((error) => {
                console.error('Error loading the mobile dashboards JSON file: ', error);
            });
    }, [jsonFileName]);

    return (
            <section className="mobile-section">
                <div className="mobile-title-wrapper">
                    <motion.h1>{titles[id - 1]}</motion.h1>
                    <h3>{texts[id - 1]}</h3>
                </div>
                <div ref={ref}>
                    {iframes.length > 0 && id <= iframes.length && (
                        <motion.div className="mobile-iframe-container">
                            <div
                                style={{ height: '100%', width: '100%' }}
                                dangerouslySetInnerHTML={{ __html: iframes[id - 1].embed_code }} // Use the id to reference the correct embed
                            />
                        </motion.div>
                    )}
                </div>
            </section>
    );
};

export default MobileCharts;
