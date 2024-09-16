import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import OceanScene from './scenes/OceanScene';

function Stage() {
  const isPortrait = useOrientation();

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'} height="100vh">
        <OceanScene />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Stage;
