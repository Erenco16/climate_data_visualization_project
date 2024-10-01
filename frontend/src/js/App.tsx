import React from 'react';
import "../css/styles.css";
import {motion, useScroll, useSpring, useTransform, MotionValue} from 'framer-motion';
import { useRef } from 'react';

function Parallax(value: MotionValue<number>, distance: number) { // Parallax scrolling effect (do not touch)
  return useTransform(value, [0, 1], [-distance, distance]);
}
function Charts({ id }: { id: number }) {
  const ref = useRef(null); // React interactive element without re-rendering
  const { scrollYProgress } = useScroll({ target: ref }); // Scroll progress bar at the bottom 
  const y = Parallax(scrollYProgress, 300); // Parallax scrolling effect (do not touch)
  const title = ["BS chart 1", "BS chart 2"]; // separate titles array of the charts(hardcoded)
  const iframes = [ // separate Iframe array of the charts(hardcoded)
    {
      title: "test_dashboard",
      src: "https://app.powerbi.com/view?r=eyJrIjoiNzY5NGIzNzAtMTdkNy00NGY4LThmMGQtYTliMjJjOGZiYzAwIiwidCI6Ijg1NjAyOTA4LWUxNWItNDNiYS05MTQ4LTM4YmM3NzNhODE2ZSIsImMiOjl9",
      width: "100%",
      height: "100%",
    },
    {
      title: "test_climate_co2",
      src: "https://app.powerbi.com/view?r=eyJrIjoiMTI4YTE5ZmEtYzdlMS00OTcyLWI3NDUtYmI3NTVlYTQ2MDc2IiwidCI6Ijg1NjAyOTA4LWUxNWItNDNiYS05MTQ4LTM4YmM3NzNhODE2ZSIsImMiOjl9",
      width: "100%",
      height: "100%",
    },
  ];
  const text = ["A lot of fucking ask for a non UI/UX student", "Like seriously"] // separate description text array

  return ( // html element
    <section> 
      <motion.h1>{title[id - 1]}</motion.h1>  
      <div ref={ref}>
        <iframe
          title={iframes[id - 1].title}
          width={iframes[id - 1].width}
          height={iframes[id - 1].height}
          src={iframes[id - 1].src}
          allowFullScreen={true}>
        </iframe>
      </div>
      <motion.h2 style={{ y }}>{text[id -1]}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { // progress bar object (do not touch)
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2].map((id) => ( // map to loop through the array, increase the number depends on how many objects in arrays
        <Charts key={id} id={id}/>
      ))}
      <motion.div className="progressBar" style={{ scaleX }} /> {/*import progressBar at the bottom of the page*/}
    </>
  );
}

//  Path: frontend/src/css/styles.css styling for the entire page 