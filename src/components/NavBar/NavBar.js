import * as React from 'react';
import { Link } from 'react-router-dom';

//Styles
import './nav-bar.scss';
import './buttom-bar.scss'
import ButtomBar from './ButtomBar';

//Dependencies
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TsunamiIcon from '@mui/icons-material/Tsunami';
//Components
import CartWidget from '../CartWidget/CartWidget';


const ResponsiveNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
    <AppBar position="static">
      <Container maxWidth="l" className='NavBar'>
        <Toolbar disableGutters>
          <TsunamiIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          ><Link to={'/'} className='title' >WAVELOOS</Link> 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
             <MenuIcon />
            </IconButton>
            <Menu
              className='ResponsiveMenu'
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <ButtomBar></ButtomBar>
              <Button><Link to={'/Store'} >Store</Link></Button>
              <Button><Link to={'/Help'} >Help</Link></Button>
            </Menu>
          </Box>
          <TsunamiIcon sx={{ display: { xs: 'flex', md: 'none', }, mr: 1 ,fontSize:'x-large'}} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none',justifyContent: 'start' },
              flexGrow: 1,
            }}
          ><Link to={'/'} className='title-responsive' >WAVELOOS</Link>
          </Typography>
          
          <Box className='navbar-buttom-list' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent: 'end' } }}>
            <ButtomBar></ButtomBar>
            <Button disableRipple><Link to={'/Store'} >Store</Link></Button>
            <Button disableRipple><Link to={'/Help'} >Help</Link></Button>
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};
export default ResponsiveNavBar;

