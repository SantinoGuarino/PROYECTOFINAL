//Firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../Data/firebaseconfig";

const getProducts = async () =>{
    const productSnapshot = await getDocs(collection(db, "products"));
    const productList = productSnapshot.docs.map((doc)=> {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
} 

    

export default getProducts