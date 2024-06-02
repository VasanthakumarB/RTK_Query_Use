import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { Avatar, ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

// project import
import Logo from './logoTheme';
import config from 'config';
import merfantz from '../../assets/user/merfantz.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <Stack direction="row" spacing={1} alignItems="center">
        {/* <Logo /> */}
        {/* <Avatar alt="Remy Sharp" src={merfantz} /> */}
        <img src={merfantz} alt="Your Image" style={{width: '150px'}} />
        {/* <Chip
          label={import.meta.env.VITE_APP_VERSION}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
        /> */}
      </Stack>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
