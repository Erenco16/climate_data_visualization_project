import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians, mix, progress } from 'popmotion';
import * as THREE from 'three';
import HumanSvg from './Human';
import { Html } from '@react-three/drei';

interface StarProps {
  p: number;
  color: string;
}

const Star: React.FC<StarProps> = ({ p, color }) => {
  const ref = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(degreesToRadians(80), degreesToRadians(100), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, [p]); // Depend on `p` so it updates when needed

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const StarField: React.FC = () => {
  const CleanParticle = 35;
  const HarmfulParticle = 65;
  const color = "#fafafa";
  const redColor = "#ca022b";

  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => {
    gl.setPixelRatio(0.3);
  }, [gl]);

  const stars = [];
  const stars1 = [];
  for (let i = 0; i < CleanParticle; i++) {
    stars.push(<Star key={`clean-star-${i}`} p={progress(0, CleanParticle, i)} color={color} />);
  }
  for (let i = 0; i < HarmfulParticle; i++) {
    stars1.push(<Star key={`harmful-star-${i}`} p={progress(0, HarmfulParticle, i)} color={redColor} />);
  }

  return (
    <>
      {stars}
      {stars1}
    </>
  );
};

// Top-level wrapper for the 3D scene
const ParticleCanvas: React.FC = () => {
  const TitleStyle: React.CSSProperties = {
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#00ED64',
    margin: "0px",
    textAlign: 'center',
    
  };

  const redSubtitleStyle: React.CSSProperties = {
    fontSize: '40px',
    color: '#ca022b',
    margin: '10px 0',
    display: 'flex',
    fontWeight: 'bold',
  };

  const whiteSubtitleStyle: React.CSSProperties = {
    fontSize: '40px',
    color: '#fafafa',
    margin: '10px 0',
    display: 'flex',
    fontWeight: 'bold',
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <body> 
        <div style={TitleStyle}>How much oxygen you are breathing in right now per 100 particles</div>
        <div style={redSubtitleStyle}>Red = Harmful Particle</div>
        <div style={whiteSubtitleStyle}>White = Oxygen Particle</div>
      </body>
        <Canvas gl={{ antialias: false }}>
          <Html center><HumanSvg /> </Html>
          <StarField />
        </Canvas>
      </div>
    </section>
  );
};

export default ParticleCanvas;