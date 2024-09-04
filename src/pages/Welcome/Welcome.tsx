import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { GlobalStyles } from '@mui/material';
import CloudBackground from '@/components/Bg/CloudBackground';
import ObjModel from '@/components/Bg/ObjModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Welcome() {
  const isPortrait = useOrientation();
  return (
    <>
      <Meta title="Welcome" />
      <GlobalStyles styles={{ background: '#ffffff' }} />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 35 }}>
          {/* eslint-disable-next-line */}
          <ambientLight intensity={0.5} />
          {/* eslint-disable-next-line */}
          <pointLight position={[10, 10, 10]} />

          {/* Rotate the entire scene by 90 degrees to the left around the Y-axis */}
          <group>
            {/* Clouds Background */}
            <CloudBackground />

            {/* 3D Model */}
            <ObjModel url="./logo3.obj" scale={0.005} />
          </group>

          <OrbitControls />
        </Canvas>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
