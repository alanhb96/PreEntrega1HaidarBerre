import NavBar from './components/NavBar'
import Cart from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () =>{

  return (
  <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer userName="Alan"/>}/>
        <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer userName="Alan"/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
