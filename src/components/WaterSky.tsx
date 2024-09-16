import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { Water } from 'three-stdlib';
import { Sky } from 'three-stdlib';
import { useTexture } from '@react-three/drei';
import { useCameraLight } from './CameraLightProvider'; // Import the hook
import MainLogoObj from './MainLogoObj';

extend({ Water, Sky });

const WaterSky = () => {
  // eslint-disable-next-line
  const { ambientLight, pointLight } = useCameraLight(); // Access camera and lights
  /* @ts-expect-error unkown*/
  const waterRef = useRef<THREE.Water>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  const { scene, gl } = useThree();
  const uri = './logo3.obj';

  const [sun, setSun] = useState(new THREE.Vector3());

  const waterNormals = useTexture('/textures/waternormals.jpg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = (sky.material as THREE.ShaderMaterial).uniforms;
    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    const pmremGenerator = new THREE.PMREMGenerator(gl);
    const parameters = { elevation: 2, azimuth: 180 };

    const updateSun = () => {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);

      const newSun = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
      setSun(newSun);
      /* @ts-expect-error unkown*/
      sky.material.uniforms['sunPosition'].value.copy(newSun);
      waterRef.current!.material.uniforms['sunDirection'].value.copy(newSun).normalize();
      // @ts-expect-error unkown
      const renderTarget = pmremGenerator.fromScene(sky);
      scene.environment = renderTarget.texture;
    };

    updateSun();
  }, [scene, gl]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (waterRef.current) {
      waterRef.current.material.uniforms['time'].value += 1.0 / 60.0;
    }

    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time) * 20 + 5;
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.z = time * 0.51;
    }
  });

  return (
    <>
      {/* @ts-expect-error unkown*/}
      <water
        ref={waterRef} // eslint-disable-next-line
        args={[
          new THREE.PlaneGeometry(10000, 10000),
          {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: waterNormals,
            sunDirection: sun,
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined,
          },
        ]} // eslint-disable-next-line
        rotation-x={-Math.PI / 2}
      />
      <MainLogoObj url={uri} scale={0.1} />
    </>
  );
};

export default WaterSky;
