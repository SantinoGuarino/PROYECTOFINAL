import * as React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../../Context/CartContext';

//Components
import ItemCount from '../ItemCount/ItemCount';
// Dependencies
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
//Style
import './Card.scss';


const CardItem = ({data}) => {
    const {title,image,price,id} = data
    const { addProductToCart } = useContext(CartContext);

    const onAdd =(data,quantity)=>{
        addProductToCart({data,quantity})
    }

    return (
        <Card sx={{maxWidth:300,margin:'auto',padding:'auto' }} >
            <CardContent className="card_item">
                <div className='surfboards_galerry'>
                    <div>
                      <img src={`/${image}`} className='sufrboards_img' alt={`./${title}`}/>
                    </div>
                    <Button variant='outlined'  className='button-detail'><Link to={`/Product/${id}`} >Detail View</Link></Button>
                    <p>{title}</p>
                    <span>${price}</span>
                    <ItemCount data={data} onAdd={onAdd} />
                </div>
            </CardContent>
        </Card>
    )
}
export default CardItem

