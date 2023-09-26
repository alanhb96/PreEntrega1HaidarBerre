import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () =>{

  return (
    <>
      <NavBar/>
      <ItemListContainer userName="Alan"/>
    </>
  )
}

export default App
