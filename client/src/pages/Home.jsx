import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { addToCart, cartItems } =
    useCart()

  const menu = [
    {
      id: 1,
      name: 'Veg Thali',
      price: 80
    },
    {
      id: 2,
      name: 'Paneer Rice',
      price: 120
    }
  ]

  return (
    <div style={{ padding: 20 }}>
      <h1>Food Ordering App</h1>

      <h2>
        Cart Count:
        {cartItems.length}
      </h2>

      <Link to="/cart">
        Go To Cart
      </Link>

      {menu.map((food) => (
        <div
          key={food.id}
          style={{
            border: '1px solid #ddd',
            padding: 20,
            marginBottom: 20,
            borderRadius: 10
          }}
        >
          <h2>{food.name}</h2>

          <p>₹{food.price}</p>

          <button
            onClick={() => {
              console.log(
                'ADDING ITEM',
                food
              )

              addToCart(food)
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}