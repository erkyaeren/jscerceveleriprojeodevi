import React from 'react'
import { Link } from 'react-router-dom'
import { IoBasketballOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="bg-[#1c3a8a] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Kısmı */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <IoBasketballOutline size={32} />
          <span>B&B</span>
        </Link>

        {/* Linkler */}
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-200 transition-colors">Anasayfa</Link>
          <Link to="/sepetim" className="hover:text-blue-200 transition-colors">Sepetim</Link>
        </div>
      </div>
    </nav>
  )
}