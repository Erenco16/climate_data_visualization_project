import React from 'react';
import "../css/styles.css";
import {motion, useScroll, useSpring, useTransform, MotionValue} from 'framer-motion';
import { useRef } from 'react';

function Parallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function Charts({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = Parallax(scrollYProgress, 300);
  const title = ["BS chart 1", "BS chart 2"];
  const iframes = [
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
  const text = ["A lot of fucking ask for a non UI/UX student", "Like seriously"]

  return (
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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2].map((id) => (
        <Charts key={id} id={id}/>
      ))}
      <motion.div className="progressBar" style={{ scaleX }} />
    </>
  );
}


