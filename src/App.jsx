
import { Routes,Route } from 'react-router'
import Layout from './component/layout/Layout'
import Rajisterr from './pages/Auth/Rajisterr'
import ForgotP from './pages/Auth/ForgotP'
import Loginn from './pages/Auth/Loginn'
import About from './pages/About'
import Caontact from './pages/Caontact'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
import Homepage from './pages/Homepage'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import Products from './pages/Admin/Products'
import Adminorder from './pages/Admin/Adminorder'

function App() {
  

  return (
    <>
 <Routes>
      <Route path='/dashboard/admin/create-category' element={<CreateCategory/>}/>
      <Route path='/dashboard/admin/create-product' element={<CreateProduct/>}/>
      <Route path='/dashboard/admin/products' element={<Products/>}/>
      <Route path='/dashboard/admin/orders' element={<Adminorder/>}/>
    
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Rajisterr/>} />
        <Route path="/forgot-password" element={<ForgotP />} />
        <Route path="/login" element={<Loginn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Caontact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound/>} />
 </Routes>

      </>
  )
}

export default App
