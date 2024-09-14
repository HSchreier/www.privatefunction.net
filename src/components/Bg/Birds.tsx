import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Birds = () => {
  const birdMesh = useRef<THREE.InstancedMesh>(null);
  const birdCount = 100;

  // Bird data for positions, velocities, and accelerations
  const birdData = useMemo(() => {
    const positions = [];
    const velocities = [];
    const accelerations = [];
    for (let i = 0; i < birdCount; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
        ),
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.01, // Slow down movement
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
        ),
      );
      accelerations.push(new THREE.Vector3(0, 0, 0)); // Initial acceleration is zero
    }
    return { positions, velocities, accelerations };
  }, [birdCount]);

  const center = new THREE.Vector3(0, 0, 0); // The target point (center)
  const maxSpeed = 0.02; // Limit max speed for slower movement
  const maxForce = 0.01; // Limit max steering force
  const fleeDistance = 0.5; // Distance at which the birds start fleeing
  const seekDistance = 3; // Distance at which the birds return to seeking the center

  const seek = (target: THREE.Vector3, birdIndex: number) => {
    const desired = new THREE.Vector3().subVectors(target, birdData.positions[birdIndex]);
    const distance = desired.length();
    desired.normalize();

    if (distance < 1) {
      // Slow down as we approach the target
      desired.multiplyScalar(maxSpeed * (distance / 1));
    } else {
      desired.multiplyScalar(maxSpeed); // Full speed if far from the target
    }

    const steer = new THREE.Vector3().subVectors(desired, birdData.velocities[birdIndex]);
    steer.clampScalar(-maxForce, maxForce); // Limit the steering force

    return steer;
  };

  const flee = (target: THREE.Vector3, birdIndex: number) => {
    const desired = new THREE.Vector3().subVectors(birdData.positions[birdIndex], target);
    const distance = desired.length();
    desired.normalize();

    if (distance < fleeDistance) {
      desired.multiplyScalar(maxSpeed * (fleeDistance - distance)); // Flee faster when closer to the center
    } else {
      return new THREE.Vector3(0, 0, 0); // No fleeing when far away
    }

    const steer = new THREE.Vector3().subVectors(desired, birdData.velocities[birdIndex]);
    steer.clampScalar(-maxForce, maxForce); // Limit the steering force

    return steer;
  };

  // Update birds' position and apply seek/flee behavior
  useFrame(() => {
    if (!birdMesh.current) return;

    const tempObject = new THREE.Object3D();
    for (let i = 0; i < birdCount; i++) {
      let force;

      const distanceToCenter = birdData.positions[i].distanceTo(center);

      // Birds seek the center when far away, and flee when they get too close
      if (distanceToCenter < fleeDistance) {
        force = flee(center, i); // Flee behavior near the center
      } else if (distanceToCenter > seekDistance) {
        force = seek(center, i); // Seek behavior towards the center when far away
      } else {
        force = birdData.velocities[i]; // Maintain current velocity when within the "orbit"
      }

      // Update velocity and position based on the force
      birdData.accelerations[i].add(force);
      birdData.velocities[i].add(birdData.accelerations[i]);
      birdData.velocities[i].clampLength(0, maxSpeed); // Limit the speed
      birdData.positions[i].add(birdData.velocities[i]);

      // Clear acceleration for the next frame
      birdData.accelerations[i].set(0, 0, 0);

      // Calculate bird rotation to face the movement direction
      const velocityDirection = birdData.velocities[i].clone().normalize();
      const up = new THREE.Vector3(0, 0, 1); // Keep birds upright (Z-axis as "up")

      const rotationMatrix = new THREE.Matrix4().lookAt(
        birdData.positions[i].clone().add(velocityDirection),
        birdData.positions[i],
        up,
      );
      tempObject.setRotationFromMatrix(rotationMatrix);

      // Wrap birds around the scene if they go too far
      const boundary = 5;
      if (birdData.positions[i].x > boundary || birdData.positions[i].x < -boundary)
        birdData.velocities[i].x *= -1;
      if (birdData.positions[i].y > boundary || birdData.positions[i].y < -boundary)
        birdData.velocities[i].y *= -1;
      if (birdData.positions[i].z > boundary || birdData.positions[i].z < -boundary)
        birdData.velocities[i].z *= -1;

      // Update the bird mesh position and rotation
      tempObject.position.copy(birdData.positions[i]);
      tempObject.updateMatrix();
      birdMesh.current.setMatrixAt(i, tempObject.matrix);
    }
    birdMesh.current.instanceMatrix.needsUpdate = true;
  });

  // Create a triangle geometry for the birds
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0,
    0.1,
    0, // top vertex (forward)
    -0.05,
    -0.1,
    0, // bottom left vertex
    0.05,
    -0.1,
    0, // bottom right vertex
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  const material = new THREE.MeshBasicMaterial({ color: 'black', side: THREE.DoubleSide });

  return (
    // eslint-disable-next-line
    <instancedMesh ref={birdMesh} args={[geometry, material, birdCount]}>
      {/* MeshBasicMaterial is defined in the 'args' parameter */}
    </instancedMesh>
  );
};

export default Birds;
