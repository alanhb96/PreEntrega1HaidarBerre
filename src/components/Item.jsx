import { Link } from "react-router-dom"


const Item = (props) => {

  return (
    <article className="p-2 shadow-md space-y-8 rounded-sm hover:scale-105 transition-all">
      <h2 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{props.item.title}</h2>
      <img className="object-contain w-full" src={props.item.image} alt={props.item.title} />
      <h3 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">${props.item.price}</h3>
      <Link className="bg-purple-500 px-4 py-2 rounded-md shadow-md" to={`/detail/${props.item.id}`}>Detail</Link>
    </article>
  )
}

export default Item