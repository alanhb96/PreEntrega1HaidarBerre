import React from 'react'
import { useState } from 'react'

function Counter(props) {

  const [counter,setCounter] = useState(props.initial)

  const handleSum = () =>{
    setCounter(counter + 1)
  }

  const handleRest = () =>{
    if (counter > 1 ){
        setCounter(counter - 1)
    }
  }

  const handleConfirm = () => {
    props.handle(counter)
  }

  return (
    <>
      <h1>Amount: {counter}</h1>
      <button className="bg-purple-500 px-4 py-2 rounded-md shadow-md" onClick={handleRest}><h2>-</h2></button>
      <button className="bg-purple-500 px-4 py-2 rounded-md shadow-md" onClick={handleSum}><h2>+</h2></button>
      <button className="bg-purple-500 px-4 py-2 rounded-md shadow-md" onClick={handleConfirm}><h2>Confirm</h2></button>
    </>
  )
}

export default Counter