import React, { useState, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'

export const Anasayfa = () => {
  const [products, setProducts] = useState([])

  // Sayfa yüklendiğinde GET isteği atılır
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Veri çekme hatası:", err))
  }, [])
   
  // Sepete POST isteği atma fonksiyonu
  const handleAddToCart = async (product) => {
    // Aynı ID ile eklenmesini önlemek veya db.json formatına uymak için id'yi siliyoruz
    const { id, ...itemToCart } = product

    try {
      await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemToCart)
      })
      alert("Ürün sepete eklendi!")
    } catch (err) {
      console.error("Sepete ekleme hatası:", err)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-gray-700 mb-6 font-medium">
        Toplam ürün sayısı: <span className="font-bold text-[#1c3a8a]">{products.length}</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isCartItem={false} 
            onAction={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  )
}