import React, { useState, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'
import { IoBasketballOutline } from "react-icons/io5";

export const Sepetim = () => {
  const [cartItems, setCartItems] = useState([])


 const fetchCart = () => {
    fetch('http://localhost:3000/cart')
      .then(res => res.json())
      .then(data => setCartItems(data))
  }

  useEffect(() => {
    fetchCart()
  }, [])

 

  
  const handleRemoveFromCart = async (product) => {
    try {
      await fetch(`http://localhost:3000/cart/${product.id}`, {
        method: 'DELETE'
      })
      // Ekrandan anında silinmesi için state'i güncelliyoruz
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } catch (err) {
      console.error("Silme hatası:", err)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[70vh] flex flex-col">
      {cartItems.length > 0 && (
        <p className="text-gray-700 mb-6 font-medium">
          Sepetteki toplam ürün sayısı: <span className="font-bold text-[#1c3a8a]">{cartItems.length}</span>
        </p>
      )}

      
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-grow">
          <p className="text-gray-700 mb-6 self-start absolute top-24 left-4 font-medium">
            Sepetteki toplam ürün sayısı: <span className="font-bold text-[#1c3a8a]">0</span>
          </p>
          <div className="text-[#1c3a8a] flex flex-col items-center">
            <IoBasketballOutline size={80} />
            <h2 className="text-2xl font-bold mt-4">Sepetiniz boş!!!</h2>
          </div>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map(item => (
            <ProductCard 
              key={item.id} 
              product={item} 
              isCartItem={true} 
              onAction={handleRemoveFromCart} 
            />
          ))}
        </div>
      )}
    </div>
  )
}