import * as React from 'react';
import { useState} from 'react';

//Style
import './item-count.scss'



const ItemCount = ({data,onAdd}) => {
    


    const [quantity,setQuantity] = useState (1)

    const addCount =()=> {
        if(quantity < data.stock) {
          setQuantity(quantity + 1)
        }
    }

    const removeCount =()=> {
        setQuantity(quantity - 1)
    }

    return (
        <>
        <div className='item-count'>
            <button disableRipple onClick={removeCount} disabled={quantity === 1 }>-</button>
            <p>{quantity}</p>
            <button disableRipple onClick={addCount}>+</button>
        </div>
        <div>
        <button onClick={()=> onAdd(data,quantity)} variant={'contained'} className='buy_buttom'>Add to cart</button>
        </div>
       </>
    )
}
export default ItemCount