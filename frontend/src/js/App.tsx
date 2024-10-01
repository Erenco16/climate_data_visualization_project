import React, { useEffect, useState, useRef } from 'react';
import "../css/styles.css";
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import Charts from './components/Charts';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
      <>
        {[1, 2, 3, 4, 5, 6, 7].map((id) => (
            <Charts key={id} id={id}/>
        ))}
        <motion.div className="progressBar" style={{ scaleX }} />
      </>
  );
}
