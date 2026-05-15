import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </>
  )
}

export default App