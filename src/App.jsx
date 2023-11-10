import NavBar from './components/NavBar'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContext from './providers/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () =>{

  return (
  <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer userName="Alan"/>}/>
          <Route path='/category/:category' element={<ItemListContainer userName="Alan"/>}/>
          <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartContext>
  </BrowserRouter>
  )
}

export default App
