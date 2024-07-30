import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
  '& paticlesBG': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '9999',
  },
  '& .parallax-effect-img': {
    position: 'absolute',
    width: '75%',
    marginLeft: '25%',
    zIndex: '1',
  },
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox };
