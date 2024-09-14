// MainLogoObj.tsx
import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { Mesh, MeshBasicMaterial } from 'three';

type ObjModelProps = {
  url: string;
  scale?: number | [number, number, number];
};

const MainLogoObj: React.FC<ObjModelProps> = ({ url, scale = 1 }) => {
  const obj = useLoader(OBJLoader, url);
  const ref = useRef<Mesh>(null);
  const [centerOffset, setCenterOffset] = useState<number>(0);

  useEffect(() => {
    if (obj) {
      // Calculate the bounding box of the object for centering
      const boundingBox = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const width = size.x;
      const offsetX = width / 2;

      setCenterOffset(offsetX);

      // Apply a black material to the entire object
      obj.traverse((child) => {
        if ((child as Mesh).isMesh) {
          (child as Mesh).material = new MeshBasicMaterial({ color: 'black' });
        }
      });
    }
  }, [obj]);
  if (centerOffset > 1) {
    // quick fix for not getting propper coords on fast page reload
    setCenterOffset(0.891104965209961);
  }
  return (
    // eslint-disable-next-line
    <mesh ref={ref} position={[-6, 0, 0]} scale={scale}>
      {/* eslint-disable-next-line */}
      <primitive object={obj} />
    </mesh>
  );
};

export default MainLogoObj;
