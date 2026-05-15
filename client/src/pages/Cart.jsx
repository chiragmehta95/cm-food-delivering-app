import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems } = useCart()

  const navigate = useNavigate()

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  return (
    <div style={{ padding: 20 }}>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid gray',
                padding: 10,
                marginBottom: 10,
                borderRadius: 10
              }}
            >
              <h3>{item.name}</h3>

              <p>
                Quantity: {item.quantity}
              </p>

              <p>
                ₹
                {item.price *
                  item.quantity}
              </p>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button
            onClick={() =>
              navigate('/checkout')
            }
            style={{
              marginTop: 20,
              padding: '12px 20px',
              background: 'green',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  )
}