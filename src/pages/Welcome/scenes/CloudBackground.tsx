// components/CloudBackground.tsx
import React from 'react';
import { Cloud } from '@react-three/drei';

const CloudBackground: React.FC = () => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <Cloud
        position={[-1, 0, 0]}
        scale={0.2}
        speed={0.4}
        color={'#ffffff'}
        opacity={0.5}
        segments={10}
      />
      {/* eslint-disable-next-line */}
      <Cloud
        position={[0, -0.5, 1]}
        scale={0.3}
        speed={0.4}
        color={'#ffffff'}
        opacity={0.8}
        segments={10}
      />
    </>
  );
};

export default CloudBackground;
