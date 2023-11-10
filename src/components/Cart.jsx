import { useContext, useState, useEffect } from "react"
import { context } from "../providers/CartContext"
import Form from "./Form.jsx"
import { app } from '../firebaseConfig.js'
import { addDoc, collection, getFirestore, } from 'firebase/firestore'

const Cart = () =>{

    const contextValue = useContext(context)
    const [checkout,setCheckout] = useState(false)
    const [totalPrice,setTotalPrice] = useState(0)
    
    const calculateTotalPrice = () => {
        let totalPrice = 0
        contextValue.cartProducts.forEach((item) => {
          totalPrice += item.price * item.quantity
        })
        setTotalPrice(totalPrice)
    }

    useEffect(() => {
        calculateTotalPrice()
      }, [contextValue.cartProducts])

    const handleClear = () =>{
        contextValue.clearCart()
    }
    
    const handleRemove = (item) =>{
       contextValue.removeItem(item)
       contextValue.decreaseTotal(item.quantity)
    }

    const handleCheckout = ({name, email, phone, products}) => {
        
        const purchase ={
            user: name,
            email: email,
            phone: phone,
            cart: products,
        }
        const db = getFirestore(app)
        const purchaseCollection = collection(db, "purchases")
        const request = addDoc(purchaseCollection,purchase)
        request.then((res) => {
            const purchaseId= res.id
            alert('This is your purchase id: ' + purchaseId)
        }).catch((err) => {
            console.log(err)
        })
        setCheckout(false)
    }

    return(
        <div className="p-4 mt-20 md:mt-32">
            <h1 className="text-2xl font-semibold mb-6 md:mb-8">Your cart: </h1>
            <ul>
                {contextValue.cartProducts.map((item) =>(
                <li key={item.id} className="mb-6 p-4 border border-gray-200 rounded-md shadow-md flex items-center space-x-4">
                    <img className="w-1/5 h-20 object-cover rounded-md" src={item.image} alt={item.title}/>
                    <div className=" w-2/5 flex flex-col flex-grow">
                        <span className="font-semibold text-lg">{item.title}</span>
                        <span className="font-semibold">Quantity: {item.quantity}</span>
                        <span className="font-semibold">${item.price*item.quantity}</span>
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md" onClick={()=>handleRemove(item)}>Remove Item</button>
                </li>))}
            </ul>
            <div className="flex justify-center mt-6 space-x-4">           
                <h3 className="text-xl mt-8 font-semibold">Total price: $ {totalPrice}</h3>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md mt-6" onClick={handleClear}>Clear cart</button>
                {checkout == true ? (<Form handleCheckout={handleCheckout}/> 
                ): (<button className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md mt-6" onClick={() => setCheckout(true)}>Proceed to checkout</button>
                )}
            </div>     
        </div>
    )
}
export default Cart