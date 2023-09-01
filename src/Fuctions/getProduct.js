//Firebase
import { doc,getDoc } from "firebase/firestore";
import db from "../Data/firebaseconfig";

const getProduct = async (id) =>{
    const docRef = doc(db, "products", id)
    const docSnaptshop = await getDoc(docRef);
    let product = docSnaptshop.data()
    product.id = docSnaptshop.id
    return product
} 

    

export default getProduct