// src/components/Scene.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import WaterSky from '@/components//WaterSky';
import { OrbitControls, Stats } from '@react-three/drei';

const OceanScene = () => {
  return (
    <Canvas camera={{ position: [30, 30, 100], fov: 55 }}>
      {/* eslint-disable-next-line */}
      <ambientLight intensity={0.5} />
      {/* eslint-disable-next-line */}
      <pointLight position={[100, 100, 100]} />
      <WaterSky />
      <OrbitControls maxPolarAngle={Math.PI * 0.495} minDistance={40} maxDistance={200} />
      <Stats />
    </Canvas>
  );
};

export default OceanScene;
