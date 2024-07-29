import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useTheme from '@/store/theme';
import { repository } from '@/config';

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
      <IconButton color="info" size="large" component="a" href={repository} target="_blank">
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}
export default Footer;
