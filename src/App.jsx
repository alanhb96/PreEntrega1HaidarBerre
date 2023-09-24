import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () =>{

  return (
    <>
      <NavBar/>
      <ItemListContainer props="Bienvenido!"/>
    </>
  )
}

export default App
