import {
  useEffect,
  useState
} from 'react'

import { Link } from 'react-router-dom'

import { useCart } from '../context/CartContext'

import getTodayMenu from '../services/menuService'

export default function Home() {
  const { addToCart, cartItems } =
    useCart()

  const [menu, setMenu] = useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] = useState(null)

  const fetchMenu = async () => {
    try {
      console.log('Fetching menu...')
      const data =
        await getTodayMenu()

      console.log('Menu data received:', data)
      setMenu(
  Array.isArray(data) ? data : []
)
    } catch (error) {
      console.error(
        'Error fetching menu:',
        error
      )
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Food Ordering App</h1>

      <div
        style={{
          marginBottom: 20
        }}
      >
        <Link to="/cart">
          🛒 Cart (
          {cartItems.length})
        </Link>
      </div>

      {loading ? (
        <p>Loading menu...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>
          Error: {error}
        </p>
      ) : menu.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        Array.isArray(menu) &&
menu.map((food) => (
          <div
            key={food.id}
            style={{
              border:
                '1px solid #ddd',
              padding: 20,
              marginBottom: 20,
              borderRadius: 10
            }}
          >
            <h2>{food.name}</h2>

            <p>₹{food.price}</p>

            <button
              onClick={() =>
                addToCart(food)
              }
              style={{
                padding:
                  '10px 15px',
                background:
                  'orange',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer'
              }}
            >
              Add To Cart
            </button>
          </div>
        ))
      )}
    </div>
  )
}
