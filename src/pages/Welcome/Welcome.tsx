import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import { GlobalStyles } from '@mui/material';
import CloudBackground from '@/components/Bg/CloudBackground';

function Welcome() {
  const isPortrait = useOrientation();
  return (
    <>
      <Meta title="Welcome" />
      <GlobalStyles styles={{}} />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <CloudBackground />
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
