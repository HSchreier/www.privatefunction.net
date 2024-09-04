import React from 'react';
import { Cloud } from '@react-three/drei';

const CloudBackground: React.FC = () => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <Cloud position={[-1, 0, 0]} scale={0.2} speed={0.4} opacity={1} segments={10} />
      {/* eslint-disable-next-line */}
      <Cloud position={[0, -0.5, 1]} scale={0.3} speed={0.4} opacity={1} segments={10} />
    </>
  );
};

export default CloudBackground;
