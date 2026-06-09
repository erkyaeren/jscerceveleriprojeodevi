import { Routes,Route } from 'react-router'
import { Anasayfa } from '../Views/Anasayfa'
import { Sepetim } from '../Views/Sepetim'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/sepetim" element={<Sepetim />} />
      </Routes>
    </div>
  )
}
