import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const MenuItem=({to,children})=>{
    return(
        <Grid item xs={12} md={4}>
        <Button
        component={Link}
        to={to}
        variant="contained"
      color="secondary"
      sx={{ minWidth: '200px' }}
      fullWidth
      >
        {children}
      </Button>
      </Grid>
    )
}

export default MenuItem;