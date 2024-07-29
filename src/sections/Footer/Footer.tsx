import Box from '@mui/material/Box';
import useTheme from '@/store/theme';

function Footer() {
  const [theme] = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <center>Copyright ...</center>
    </Box>
  );
}
export default Footer;
