import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    return(
        <div className="mt-20">
            <h1>Bienvenido {props.userName}!</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer