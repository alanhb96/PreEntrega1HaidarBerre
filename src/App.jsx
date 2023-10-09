import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemListContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes } from 'react-router-dom'

const App = () =>{

  return (
  <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer userName="Alan"/>}/>
        <Route path='/Detail' element = {<ItemDetailContainer/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
