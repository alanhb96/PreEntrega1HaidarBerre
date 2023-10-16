import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const params = useParams()
    
    useEffect(() => {

        fetch('/src/products.json')
            .then((response) => response.json())
            .then(data =>{
                if(params.category){
                    const filteredProducts = data.filter(p => p.category === params.category)
                    setProducts(filteredProducts)
                }else{setProducts(data)}
            })
            /* .then(data => setProducts(data)) */
            .catch((error) => error)
    },[params.category]) 

    return(
        <div className="mt-20">
            <h1>Bienvenido {props.userName}!</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer