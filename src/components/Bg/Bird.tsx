// Bird.tsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Vector3, Group } from 'three';

const Bird: React.FC = () => {
  const birdRef = useRef<Group>(null);
  const targetRef = useRef<Vector3>(new Vector3(0, 0, -50)); // Target position for the bird to move towards

  // Load the OBJ model
  const obj = useLoader(OBJLoader, './bird.obj');

  // Initial position of the bird
  const position = useRef(new Vector3(0, 0, 50)); // Start far from the target
  const velocity = useRef(new Vector3(0, 0, -0.1)); // Move towards the target (negative z direction)

  useFrame(() => {
    if (!birdRef.current) return;

    // Move bird towards the target position
    const direction = targetRef.current.clone().sub(position.current).normalize();
    velocity.current.add(direction.multiplyScalar(0.01)); // Apply a small acceleration towards the target
    position.current.add(velocity.current);

    // Update bird's position and orientation
    birdRef.current.position.copy(position.current);
    birdRef.current.lookAt(targetRef.current); // Face the target direction
  });

  return (
    <group ref={birdRef}>
      {/* eslint-disable-next-line */}
      <primitive object={obj} scale={0.5} />
    </group>
  );
};

export default Bird;
