import React from 'react';
import { Cloud } from '@react-three/drei';
import * as THREE from 'three';

const CloudBackground: React.FC = () => {
  const cloudColor = new THREE.Color(0x00aaff); // Desired cloud color
  return (
    <>
      {/* eslint-disable-next-line */}
      <Cloud
        position={[-1, 0, 0]}
        scale={0.2}
        speed={0.4}
        opacity={1}
        width={5}
        depth={2}
        segments={10}
        material={new THREE.MeshBasicMaterial({ color: cloudColor })}
      />
      {/* eslint-disable-next-line */}
      <Cloud
        position={[0, -0.5, 1]}
        scale={0.3}
        speed={0.4}
        opacity={1}
        width={5}
        depth={2}
        segments={10}
        material={new THREE.MeshBasicMaterial({ color: cloudColor })}
      />
    </>
  );
};

export default CloudBackground;
