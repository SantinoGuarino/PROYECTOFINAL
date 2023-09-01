import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import CartContext from '../../Context/CartContext';
//Dependencies
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
//Components
import CartCount from './CartCount';
//Style
import './cart-widget.scss'


const CartWidget =()=>{
    const {productsInCart, clearCart,removeProductFromCart,totalQuantity} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    return(
        
        <div className='cart-container-icon'>
            {totalQuantity() !== 0 &&(
            <p>{totalQuantity()}</p>
            )}
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                marginThreshold={30}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
            <div className='container-item-list-cart'>
                {productsInCart.length === 0 && (
                    <> 
                        <div className='conteiner-noproducts'>
                            <p>There are no products added to the cart</p>
                            <button className='button-start-buying-widget'>
                                <Link to='/' >Start buying</Link>
                            </button>
                        </div>  
                    </>
                )}
                {productsInCart.map( (item) => {
                    return(
                    <div className='item-cart-prod' key={item.id}>
                        <div className='cart-prod__image'>
                            <img src={`/${item.image}`} alt="prod carrito" />
                        </div>
                        <div className='cart-prod__info'>
                            <p>{item.title}</p>
                            <span>$ {item.price * item.quantity}</span>
                            <p>selected: {item.quantity}</p>
                        </div>
                        <CartCount item={item}/>
                        <div className='cart-prod__delet'>
                            <button onClick={() =>removeProductFromCart(item)}>
                                <DeleteIcon  />
                            </button>
                        </div>
                    </div>
                    )
                })
                } 
            </div>
            <div key={1} className='cart-buttons'>
                <button onClick={clearCart}>
                    Clear
                </button>
                <button>
                    <Link to='/Cart'>View Cart</Link>
                </button>
            </div>
            </Menu>
        </div>
    )
}

export default CartWidget