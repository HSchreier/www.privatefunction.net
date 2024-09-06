import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Birds = () => {
  const birdMesh = useRef<THREE.InstancedMesh>(null);
  const birdCount = 200;

  // Position, velocity, and direction of each bird (simulating the birds)
  const birdData = useMemo(() => {
    const positions = [];
    const velocities = [];
    for (let i = 0; i < birdCount; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ),
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
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
      if (birdData.positions[i].x > 10 || birdData.positions[i].x < -10)
        birdData.velocities[i].x *= -1;
      if (birdData.positions[i].y > 10 || birdData.positions[i].y < -10)
        birdData.velocities[i].y *= -1;
      if (birdData.positions[i].z > 10 || birdData.positions[i].z < -10)
        birdData.velocities[i].z *= -1;

      tempObject.position.copy(birdData.positions[i]);
      tempObject.updateMatrix();
      birdMesh.current.setMatrixAt(i, tempObject.matrix);
    }
    birdMesh.current.instanceMatrix.needsUpdate = true;
  });

  // Use a default geometry (BoxGeometry) and assign a valid BufferGeometry to instancedMesh
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);

  return (
    // eslint-disable-next-line
    <instancedMesh ref={birdMesh} args={[geometry, null, birdCount]}>
      <meshBasicMaterial color={'black'} />
    </instancedMesh>
  );
};

export default Birds;
