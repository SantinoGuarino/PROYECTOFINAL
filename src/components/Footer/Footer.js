import { Link } from 'react-router-dom';
//Dependencies
import Typography from '@mui/material/Typography';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
//Styles
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer-conteiner'>
            <div className='logo-footer'>
                <TsunamiIcon fontSize='medium' sx={{ mr: 1 ,color: 'white'  }} />
                <Typography
                 variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 10000,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                ><Link to={'/'}>WAVELOOS</Link> 
                </Typography>
            </div>
            <div className='social-media'>
                <Link to={'/'}><InstagramIcon/></Link>
                <Link to={'/'}><FacebookIcon/></Link>
                <Link to={'/'}><TwitterIcon/></Link>
                <Link to={'/'}><YouTubeIcon/></Link>
            </div>
            <div className='page-map'>
                <h3>MAP</h3>
                <div className='map-links'>
                    <div>
                        <h4>Sections</h4>
                        <Link to={'/'} >Home</Link>
                        <Link to={'/Store'} >Store</Link>
                        <Link to={'/Help'} >Help</Link>
                    </div>
                    <div>
                        <h4>Products</h4>
                        <Link to={`/Products/sup`}>Sup</Link>
                        <Link to={`/Products/surfboards`}>Surfboards</Link>
                        <Link to={`/Products/bodyboards`}>Bodyboards</Link>
                        <Link to={`/Products/accesories`}>Accesories</Link>
                    </div>
                </div>
                
            </div>
            <div className='rights'>
                <p>WAVELOOS. All Rights Reserved.</p>
            </div>
        </div>
    );
}


export default Footer;