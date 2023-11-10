import ItemCount from "./ItemCount"
import { context } from "../providers/CartContext"
import { useState,useContext } from 'react'


 const ItemDetail = (props) =>{

  const contexValue = useContext(context)
  const [finalAmount,setFinalAmount] = useState(0)

  const handle = (counterAmount) =>{
    setFinalAmount(counterAmount)
  }

  const handleAdd = () =>{
    contexValue.incrementTotal(finalAmount)
    contexValue.addItem(props.product,finalAmount)
  }

  return (
    <div className="mt-20">
      <img className="max-h-72 object-contain w-full" src={props.product.image} alt={props.product.title}/>
      <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.product.title}</h2>
      <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.product.genre}</h3>
      <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">${props.product.price}</h3>
      <p className="">{props.product.description}</p>
      {finalAmount > 0 ? (
        <button className="bg-purple-500 px-4 py-2 rounded-md shadow-md" onClick={handleAdd}>Add to Cart</button>
      ) : (
        <ItemCount initial={1} handle={handle}/>
      )}
    </div>
  )
}

export default ItemDetail