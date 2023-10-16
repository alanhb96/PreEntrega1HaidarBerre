import ItemDetail from './ItemDetail'
import products from '../products.json'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


 const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    products.forEach(p => {
      if(p.id === parseInt(params.id)){
        setProduct(p)
      }
    });

  },[]) 
  
  console.log(product)

  return (
    <div><ItemDetail product={product}/></div>
  )
}

export default ItemDetailContainer