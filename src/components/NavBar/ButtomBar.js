import * as React from 'react';
import { Link } from 'react-router-dom';
//Dependencies
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//Style
import './buttom-bar.scss'

export default function ButtomBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        disableRipple
        className='buttom_bar'
        sx={{display: 'block' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        PRODUCTS
      </Button>
      <Menu
        className='buttombar-list'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={`/Products/surfboards`}>SURFBOARDS</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Products/sup`}>SUP</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Products/bodyboards`}>BODYBOARDS</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Products/accesories`}>ACCESORIES</Link></MenuItem>
      </Menu>
    </div>
  );
}