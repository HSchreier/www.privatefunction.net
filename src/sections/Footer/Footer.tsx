import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Box from '@mui/material/Box';
import { FlexBox } from '@/components/styled';
import IconButton from '@mui/material/IconButton';
import useTheme from '@/store/theme';
import { repository, linkedin, twitter } from '@/config';

function Footer() {
  const [theme] = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: 1,
        bottom: 0,
        width: '100%',
        color: '#000000',
        position: 'fixed',
      }}
      data-pw={`theme-${theme}`}
    >
      <FlexBox sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '2%' }}>
        <IconButton color="info" size="large" component="a" href={repository} target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton color="info" size="large" component="a" href={linkedin} target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="info" size="large" component="a" href={twitter} target="_blank">
          <XIcon />
        </IconButton>
      </FlexBox>
    </Box>
  );
}
export default Footer;
