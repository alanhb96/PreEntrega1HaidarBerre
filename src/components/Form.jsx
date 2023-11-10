import { useState, useContext } from 'react'
import { context } from "../providers/CartContext"

const CheckoutForm = ({ handleCheckout }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const contextValue = useContext(context)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !phone) {
      alert('Please fill in all fields')
      return
    }

    const products = contextValue.cartProducts

    handleCheckout({ name, email, phone, products })
    setName('')
    setEmail('')
    setPhone('')
    contextValue.clearCart()
  }
 
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Name:</label>
        <input className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Email:</label>
        <input className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-medium">Phone:</label>
        <input className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"  type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
      </div>
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md">Confirm purchase</button>
    </form>
  )
}

export default CheckoutForm