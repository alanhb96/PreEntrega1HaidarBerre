import {createContext, useState} from 'react'


export const context = createContext()
const Provider = context.Provider

const CartContext = (props) =>  {

  const [cartList, setCartList] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const handleAddItem = (item, qt) => {
    const arrayCopy = [...cartList]
    if(arrayCopy.length < 0){
      item.quantity= qt
      arrayCopy.push(item)
    } else {
      const productId =item.id
      const qtToAdd = qt

      const productToUpdate = arrayCopy.find((product)=>product.id === productId)

      if(productToUpdate){
        productToUpdate.quantity += qtToAdd
      } else{
        item.quantity= qt
        arrayCopy.push(item)
      }
    }

    setCartList(arrayCopy)
  }

  const handleRemoveItem = (item) => {
    let arrayCopy = [...cartList]

    const productIdToRemove =item.id

    arrayCopy = arrayCopy.filter((product) => product.id !== productIdToRemove);
    setCartList(arrayCopy)
  }

  const handleClearCart = () => {
    const arrayCopy = []
    setCartList(arrayCopy)
    setCartTotal(0)
  }

  const handleCartTotal = (newAmount) =>{
    setCartTotal(cartTotal + newAmount)
  }

  const handleCartTotalNegative = (newAmount) =>{
    setCartTotal(cartTotal - newAmount)
  }

  const contextValue = {
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart,
    incrementTotal: handleCartTotal,
    decreaseTotal: handleCartTotalNegative,
    cartTotal: cartTotal,
    cartProducts: cartList,
  }

  return (
    <Provider value={contextValue}>
        {props.children}
    </Provider>
  )

}

export default CartContext