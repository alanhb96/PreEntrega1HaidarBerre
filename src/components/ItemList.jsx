import Item from './Item'

const ItemList = (props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
    {props.products.map((item) => {
      return (<Item item={item}/>)
      })
    }
    </section>
  )
}

export default ItemList