import { Link } from "react-router-dom"


const Item = (props) => {

  return (
    <article className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800 overflow-hidden whitespace-nowrap overflow-ellipsis mb-4">{props.item.title}</h2>
      <img className="object-contain h-40 w-full rounded-md mb-4" src={props.item.image} alt={props.item.title}/>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-black-600">${props.item.price}</h3>  
      </div>
      <div className="mt-2">  
        <Link className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 focus:outline-none" to={`/detail/${props.item.id}`}>Detail</Link>
      </div>
    </article>
  )
}

export default Item