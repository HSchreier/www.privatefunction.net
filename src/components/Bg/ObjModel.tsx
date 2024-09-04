// ObjModel.tsx
import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh, MeshBasicMaterial } from 'three';

type ObjModelProps = {
  url: string;
  scale?: number | [number, number, number]; // Allow scale to be a single number or an array of three numbers
};

const ObjModel: React.FC<ObjModelProps> = ({ url, scale }) => {
  const obj = useLoader(OBJLoader, url);
  const ref = useRef<Mesh>(null);
  obj.traverse((child) => {
    if ((child as Mesh).isMesh) {
      (child as Mesh).material = new MeshBasicMaterial({ color: 'black' });
    }
  });
  return (
    <mesh ref={ref} scale={scale}>
      {/* eslint-disable-next-line */}
      <primitive object={obj} />
    </mesh>
  );
};

export default ObjModel;
