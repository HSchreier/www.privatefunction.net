// src/custom-modules/three/examples/jsm/objects/Water.d.ts
import * as THREE from 'three';

interface WaterOptions {
  textureWidth?: number;
  textureHeight?: number;
  clipBias?: number;
  alpha?: number;
  time?: number;
  waterNormals?: THREE.Texture | null;
  sunDirection?: THREE.Vector3;
  sunColor?: THREE.Color | number | string;
  waterColor?: THREE.Color | number | string;
  eye?: THREE.Vector3;
  distortionScale?: number;
  side?: THREE.Side;
  fog?: boolean;
}

export class Water extends THREE.Mesh {
  constructor(geometry: THREE.Geometry | THREE.BufferGeometry, options?: WaterOptions);

  isWater: boolean;
  material: THREE.ShaderMaterial;
  onBeforeRender(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void;
}
