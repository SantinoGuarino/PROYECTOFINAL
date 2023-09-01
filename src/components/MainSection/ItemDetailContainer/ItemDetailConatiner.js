import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
// Components
import ItemDetail from "../ItemDetail/ItemDetail"
//Functions
import getProduct from "../../../Fuctions/getProduct"
import Loading from "../../../Fuctions/loading"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const[product, setProduct] = useState({})
    const [loading, setLoading]= useState(true)


    useEffect(()=>{
        getProduct(id)
        .then( (response) => {
            setLoading(false)
            setProduct(response)
        })
        .catch((err) => {
            console.log("fallo la llamada.", err)
        })
        .finally( ()=> {
        }) 
        
    },[id])


    
    return (
        <>
        {
            (loading)
        
            ?

            ( <Loading/> ) 
        
            :
            
            <ItemDetail data={product}/>
        }
        </>
    )
}

export default ItemDetailContainer