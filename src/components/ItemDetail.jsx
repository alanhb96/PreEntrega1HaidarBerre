
 const ItemDetail = (props) =>{

  return (
    <div className="mt-20">
      <img className="max-h-72 object-contain w-full" src={props.product.image} alt={props.product.title}/>
      <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.product.title}</h2>
      <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">${props.product.price}</h3>
      <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.product.category}</h3>
      <p className="">{props.product.description}</p>
      <button className="bg-purple-500 px-4 py-2 rounded-md shadow-md" onClick={()=>{}}>Add to Cart</button>
    </div>
  )
}

export default ItemDetail