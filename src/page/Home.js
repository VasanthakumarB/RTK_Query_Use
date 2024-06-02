// pages/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../components/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack  from '@mui/system/Stack';
import  Button  from '@mui/material/Button';
import MenuItemButton from '../components/menuitem';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="home-container">
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Typography variant="h4">Hi Welcome to RTK Query</Typography>
        {user && <Typography variant="h6">{user.fullname}</Typography>}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <MenuItemButton to="/admission">Admission</MenuItemButton>
          </Grid>
          <Grid item xs={12}>
            <MenuItemButton to="/admission-list">Admission List</MenuItemButton>
          </Grid>
          <Grid item xs={12}>
            <MenuItemButton to="#">Not Working</MenuItemButton>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}