import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch('src/products.json')
            .then((response) => response.json())
            .then(data =>{
                if(params.category){
                    setProducts(data.filter(p => p.category === params.category))
                }else{setProducts(data)}
            })
            /* .then(data => setProducts(data)) */
            .catch((error) => error)
    },[products]) 

    return(
        <div className="mt-20">
            <h1>Bienvenido {props.userName}!</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer