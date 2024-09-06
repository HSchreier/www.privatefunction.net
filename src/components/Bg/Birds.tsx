import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Birds = () => {
  const birdMesh = useRef<THREE.InstancedMesh>(null);
  const birdCount = 100;

  // Position, velocity, and direction of each bird (simulating the birds)
  const birdData = useMemo(() => {
    const positions = [];
    const velocities = [];
    for (let i = 0; i < birdCount; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5, // Smaller range for X
          (Math.random() - 0.5) * 5, // Smaller range for Y
          (Math.random() - 0.5) * 5, // Smaller range for Z
        ),
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.005, // Smaller velocity for X
          (Math.random() - 0.5) * 0.005, // Smaller velocity for Y
          (Math.random() - 0.5) * 0.005, // Smaller velocity for Z
        ),
      );
    }
    return { positions, velocities };
  }, [birdCount]);

  // Update birds' position based on velocity
  useFrame(() => {
    if (!birdMesh.current) return;

    const tempObject = new THREE.Object3D();
    for (let i = 0; i < birdCount; i++) {
      birdData.positions[i].add(birdData.velocities[i]);

      // Wrap birds around the scene
      if (birdData.positions[i].x > 5 || birdData.positions[i].x < -5)
        birdData.velocities[i].x *= -1;
      if (birdData.positions[i].y > 5 || birdData.positions[i].y < -5)
        birdData.velocities[i].y *= -1;
      if (birdData.positions[i].z > 5 || birdData.positions[i].z < -5)
        birdData.velocities[i].z *= -1;

      tempObject.position.copy(birdData.positions[i]);
      tempObject.updateMatrix();
      birdMesh.current.setMatrixAt(i, tempObject.matrix);
    }
    birdMesh.current.instanceMatrix.needsUpdate = true;
  });

  // Create a TetrahedronGeometry for the birds
  const geometry = new THREE.TetrahedronGeometry(0.1); // Smaller tetrahedron size
  const material = new THREE.MeshBasicMaterial({ color: 'black' });

  return (
    // eslint-disable-next-line
    <instancedMesh ref={birdMesh} args={[geometry, material, birdCount]}>
      {/* MeshBasicMaterial is defined in the 'args' parameter */}
    </instancedMesh>
  );
};

export default Birds;
