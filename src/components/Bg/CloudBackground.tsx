import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cloud } from '@react-three/drei';
import * as THREE from 'three';
import ObjModel from './ObjModel';

const CloudBackground: React.FC = () => {
  const cloudColor = new THREE.Color(0x00aaff); // Desired cloud color

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 35 }}>
        {/* eslint-disable-next-line */}
        <ambientLight intensity={0.5} />
        {/* eslint-disable-next-line */}
        <pointLight position={[10, 10, 10]} />

        <ObjModel url="./logo3.obj" scale={0.005} />

        {/* eslint-disable-next-line */}
        <Cloud
          position={[4, -2, -10]}
          speed={0.4}
          opacity={1}
          width={5}
          depth={2}
          segments={10}
          material={new THREE.MeshBasicMaterial({ color: cloudColor })}
        />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default CloudBackground;
