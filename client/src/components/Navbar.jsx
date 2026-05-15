import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <div
      style={{
        background: 'orange',
        padding: '20px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h2 style={{ margin: 0 }}>Food Ordering App</h2>

      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/cart">Cart</Link>
        {' | '}
        <Link to="/orders">Orders</Link>
        {' | '}
        <Link to="/profile">Profile</Link>
        {' | '}
        {user ? (
          <>
            <span>📱 +91{user.phone?.slice(-10)}</span>
            {' | '}
            <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {' | '}
        <Link to="/support">Support</Link>
      </div>
    </div>
  )
}

export default Navbar
