// ObjModel.tsx
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh, Box3, Vector3 } from 'three';

type ObjModelProps = {
  url: string;
  scale?: number | [number, number, number];
};

const ObjModel: React.FC<ObjModelProps> = ({ url, scale = 1 }) => {
  const obj = useLoader(OBJLoader, url);
  const ref = useRef<Mesh>(null);

  useEffect(() => {
    // Calculate the bounding box of the model
    const box = new Box3().setFromObject(obj);
    const center = new Vector3();
    box.getCenter(center);

    // Adjust the position so the object is centered
    obj.position.sub(center);
  }, [obj]);

  return (
    <mesh ref={ref} scale={scale}>
      {/* eslint-disable-next-line */}
      <primitive object={obj} />
    </mesh>
  );
};

export default ObjModel;
