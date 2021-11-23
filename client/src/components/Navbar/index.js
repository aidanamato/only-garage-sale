import React from 'react';
import { usePageContext } from '../../utils/GlobalState';

// import mui here
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon1 from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import MenuIcon from '@mui/icons-material/Menu';

import SignUp from '../SignUp';

const AppNavbar = () => {
  const [, dispatch] = usePageContext();

  const clickHandler = (event) => {
    if (event.target.textContent === "Sign Up") {
      dispatch({
        type: 'UPDATE_SIGNUP_MODAL'
      });
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <HomeIcon1 sx={{ fontSize: 25 }} />
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              Only Garage Sale
            </Typography>
            <Button color="inherit" onClick={clickHandler}><PersonIcon sx={{ fontSize: 25 }} />Login</Button>
            <Button color="inherit" onClick={clickHandler}><PersonIcon sx={{ fontSize: 25 }} />Sign Up</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <SignUp />
    </>
  );
};

export default AppNavbar;