import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div
      style={{
        background: 'orange',
        padding: '20px',
        marginBottom: '20px'
      }}
    >
      <h2>Food Ordering App</h2>

      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/cart">Cart</Link>
        {' | '}
        <Link to="/orders">Orders</Link>
        {' | '}
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Navbar