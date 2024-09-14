// src/custom-modules/three/examples/jsm/objects/Sky.d.ts
import * as THREE from 'three';

export class Sky extends THREE.Mesh {
  constructor();

  isSky: boolean;
  static SkyShader: {
    name: string;
    uniforms: {
      turbidity: { value: number };
      rayleigh: { value: number };
      mieCoefficient: { value: number };
      mieDirectionalG: { value: number };
      sunPosition: { value: THREE.Vector3 };
      up: { value: THREE.Vector3 };
    };
    vertexShader: string;
    fragmentShader: string;
  };
}
