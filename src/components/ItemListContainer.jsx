import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { app } from '../firebaseConfig'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const params = useParams()
    
    useEffect(() => {
        const db = getFirestore(app)
        const productsCollection = collection(db,"products")

        if(params.category){
            const filter = query(productsCollection, where("category","==",params.category))
            const filtereRequest = getDocs(filter)
            filtereRequest.then((res) => {
                const productsFirebase = res.docs.map(doc => {
                    const id = doc.id
                    const data = doc.data()
                    data.id = id
                    return data
                    })
                setProducts(productsFirebase)
            }).catch((err) => {
                console.log(err)
            })
        }else{
            const request = getDocs(productsCollection)
            request.then((res) => {
                    const productsFirebase = res.docs.map(doc => {
                    const id = doc.id
                    const data = doc.data()
                    data.id = id
                    return data
                })
            setProducts(productsFirebase)
            }).catch((err) => {
                console.log(err)
            })
        }
    },[params.category]) 

    return(
        <div className="mt-20">
            <h1>Bienvenido {props.userName}!</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer