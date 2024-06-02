// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import merfantz_logo from '../icons/merfantzIcon.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

export default function AuthMerfantzBackground() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(18px)',
        zIndex: -1,
        bottom: '75px',
        transform: 'inherit'
      }}
    >
      <img src={merfantz_logo} alt="merfantz logo" />
    </Box>
  );
}
