import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { Canvas } from '@react-three/fiber';
import WaterSky from '@/components/WaterSky';
import { OrbitControls, Stats } from '@react-three/drei';
import CameraLightProvider from '@/components/CameraLightProvider'; // Import the new provider

function Stage() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'} height="100vh">
        <Canvas camera={{ position: [30, 30, 100], fov: 55 }}>
          <CameraLightProvider>
            <WaterSky />
            <OrbitControls maxPolarAngle={Math.PI * 0.495} minDistance={40} maxDistance={200} />
            <Stats />
          </CameraLightProvider>
        </Canvas>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Stage;
