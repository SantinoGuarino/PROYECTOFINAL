import * as React from 'react';
//Dependencies
import {Grid} from '@mui/material';
//Components
import CardItem from '../Card/Card';


const CardItemList =({products})=> {
    return(
        <>
        <Grid container spacing={2} className='galerry_container'>
            {
                products.map( (product)=>{
                    return(
                        <Grid item xs={12} sm={6} md={3} className="cards_gallery" key={product.id}>
                            <CardItem data={product} />
                        </Grid>
                    )
                    
                })
            }
        </Grid> 
        </> 
    )
}

export default CardItemList