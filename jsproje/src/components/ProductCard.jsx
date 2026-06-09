import React from 'react'

export const ProductCard = ({ product, isCartItem, onAction }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col w-full max-w-[280px] mx-auto">
      {/* Ürün Görseli (Arkaplanı gri tonlu) */}
      <div className="bg-gray-200 h-64 p-4 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="p-4 flex flex-col flex-grow bg-white">
        <h3 className="font-bold text-gray-900 mb-2 truncate" title={product.title}>
          {product.title}
        </h3>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-[#1c3a8a] font-semibold">{product.category}</span>
          <span className="text-lg font-bold text-[#1c3a8a]">{product.price} ₺</span>
        </div>

        {/* Dinamik Buton: Props'tan gelen isCartItem durumuna göre rengi ve yazısı değişir */}
        <button 
          onClick={() => onAction(product)}
          className="w-full bg-[#1c3a8a] hover:bg-blue-800 text-white py-2 rounded-lg font-medium transition-colors mt-auto"
        >
          {isCartItem ? 'Sil' : 'Ekle'}
        </button>
      </div>
    </div>
  )
}