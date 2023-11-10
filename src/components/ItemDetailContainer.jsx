import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { app } from '../firebaseConfig.js'
import { getDoc, collection, getFirestore,doc } from 'firebase/firestore'

 const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    const db = getFirestore(app)
    const productsCollection = collection(db,"products")
    const docRef = doc(productsCollection, params.id)
    const request = getDoc(docRef)

    request.then((res) => {
      const prod = res.data()
      prod.id = res.id
      setProduct(prod)
    }).catch((err) => {
      console.log(err)
    })
  },[]) 

  return (
    <div><ItemDetail product={product}/></div>
  )
}

export default ItemDetailContainer