import * as React from 'react';
import {useState, useEffect} from 'react';

//Components
import CardItemList from '../CardItemList/CardItemList';

//Fuctions
import getProducts from '../../../Fuctions/getProducts';
import Loading from '../../../Fuctions/loading';

import './card-list-conteiner.scss'
const CardListContainer =({category,title}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        getProducts()
        .then( (response) => {
            setLoading(false)
            switch(category){
                case'surfboards':setProducts( category && response.filter( product => product.category === category));
                break;
                case'sup':setProducts( category && response.filter( product => product.category === category));
                break;
                case'bodyboards':setProducts( category && response.filter( product => product.category === category));
                break;
                case'accesories':setProducts( category && response.filter( product => product.category === category));
                break;
                default:if(title === "Prime selection"){
                    setProducts(response && response.filter( product => product.price > 250000) )
                }else if(title === "Get started"){
                   setProducts(response && response.filter( product => product.price < 70000 && product.category === 'bodyboards') ) 
                }else if(title === "Modify your table"){
                    setProducts(response && response.filter( product => product.category === 'accesories' && product.price < 15000 ) )
                };
                break;
            }
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        })
        
    },[category,title])
    
    

    return(
        <>
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            
            <div className='card-list-conteiner'>
                <h2>{title}</h2>
                <CardItemList products={products}></CardItemList>
            </div>
        }
        </> 
    )
}


export default CardListContainer