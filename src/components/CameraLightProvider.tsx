// src/components/CameraLightProvider.tsx
import { createContext, useContext, useEffect, useRef } from 'react';
import { PerspectiveCamera, PointLight, AmbientLight } from 'three';
import { useFrame, useThree } from '@react-three/fiber';

const CameraLightContext = createContext<{
  camera: PerspectiveCamera;
  ambientLight: AmbientLight;
  pointLight: PointLight;
} | null>(null);

export const useCameraLight = () => {
  const context = useContext(CameraLightContext);
  if (!context) {
    throw new Error('useCameraLight must be used within a CameraLightProvider');
  }
  return context;
};

const CameraLightProvider = ({ children }: { children: React.ReactNode }) => {
  const { camera: defaultCamera, scene } = useThree();
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const ambientLightRef = useRef<AmbientLight | null>(null);
  const pointLightRef = useRef<PointLight | null>(null);

  // Initialize camera and lights
  useEffect(() => {
    const camera = new PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(30, 30, 100);

    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const pointLight = new PointLight(0xffffff, 1);
    pointLight.position.set(100, 100, 100);

    cameraRef.current = camera;
    ambientLightRef.current = ambientLight;
    pointLightRef.current = pointLight;

    // Add lights to the scene
    scene.add(ambientLight, pointLight);

    // Replace the default camera with our custom camera
    defaultCamera.position.set(30, 30, 100);

    return () => {
      scene.remove(ambientLight, pointLight);
    };
  }, [defaultCamera, scene]);

  // Keep updating the camera during animation frames
  // eslint-disable-next-line
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      cameraRef.current.updateMatrixWorld();
    }
  });

  return (
    <CameraLightContext.Provider
      value={{
        camera: cameraRef.current!,
        ambientLight: ambientLightRef.current!,
        pointLight: pointLightRef.current!,
      }}
    >
      {children}
    </CameraLightContext.Provider>
  );
};

export default CameraLightProvider;
