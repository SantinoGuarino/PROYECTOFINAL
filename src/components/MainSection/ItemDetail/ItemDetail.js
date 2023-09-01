import { useContext } from 'react';
//Components
import CartContext from '../../../Context/CartContext'
import ItemCount from "../ItemCount/ItemCount"
//dependencies
import { Grid} from "@mui/material"
//Styles
import './item-detail.scss'

const ItemDetail =({data})=> {
    const {title,image,price} = data
    const { addProductToCart } = useContext(CartContext);

    
    const onAdd =(data,quantity)=>{
        addProductToCart({data,quantity})
    }

    return(
            <Grid container>
                <Grid container className="item-detail-card" >
                <Grid item xs={12} sm={6} className='item-detail-img' >
                    <div>
                        <p className='top-tittle'>{title}</p>
                        <img src={`/${image}`}  alt={`./${title}`}/>  
                    </div> 
                </Grid>
                <Grid item xs={12} sm={6} className="item-detail-descripcion" >    
                    <div>
                        <p className='buttom-tittle'>{title}</p>
                        <p>${price} </p>
                        <ItemCount  data={data} onAdd={onAdd} 
                        />  
                    </div>
                    
                </Grid>
            </Grid>
            </Grid>
            
            

    )
}

export default ItemDetail

