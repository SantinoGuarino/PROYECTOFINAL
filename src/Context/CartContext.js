// React
import { createContext, useState , useEffect } from "react";
//Functions
import getProducts from "../Fuctions/getProducts";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [productsInCart, setproductsInCart] = useState([])
    
    const productIsInCart = (data)=> {
        return(
            productsInCart.find(product => product.id === data.id)
        )
    }

    const totalPrice = ()=>{
        return productsInCart.reduce((acc,product) => acc + product.price * product.quantity,0)
    } 

    const totalQuantity = () => {
        return productsInCart.reduce((acc,product,) => acc + product.quantity,0)
    }

    const addProductToCart = ({data,quantity}) =>{
        getProducts()
        const productInCart = {title: data.title,image: data.image,price: data.price,id: data.id,category: data.category,stock:data.stock,quantity}
        
        if(productIsInCart(productInCart)){
            setproductsInCart( productsInCart.map((prod) => {
                if(prod.id === productInCart.id){
                    prod.quantity += productInCart.quantity
                }
                return(
                    prod
                )
            }))
        }else{
            setproductsInCart(producstInCart => [...producstInCart, productInCart])
        }
    }
    
    useEffect(()=> {

    },[productsInCart])
    
    const removeProductFromCart = (item)=>{
        setproductsInCart(productsInCart.filter(productsInCart => productsInCart.id !== item.id))
    }

    const decreaseItemFromCart = (item) => {
        setproductsInCart( productsInCart.map((prod) => {
            if(prod.id === item.id){
                prod.quantity -= 1
            }
            return(prod)
            
        }))
    }

    const increaseItemFromCart = (item) => {
        setproductsInCart( productsInCart.map((prod) => {
            if(prod.id === item.id){
                prod.quantity += 1
            }
            return(prod)
            
        }))
    }
    
    const clearCart=()=>{
        setproductsInCart([])
    }
    
    
    const data = {
        productsInCart,
        addProductToCart,
        increaseItemFromCart,
        decreaseItemFromCart,
        removeProductFromCart,
        clearCart,
        totalPrice,
        totalQuantity,
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider}