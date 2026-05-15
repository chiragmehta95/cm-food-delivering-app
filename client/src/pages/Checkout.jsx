import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cartItems } = useCart()

  const navigate = useNavigate()

  const [orderPlaced, setOrderPlaced] =
    useState(false)

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  )

  const placeOrder = () => {
    setOrderPlaced(true)

    setTimeout(() => {
      navigate('/orders')
    }, 2000)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
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

          {!orderPlaced ? (
            <button
              onClick={placeOrder}
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
              Place Order
            </button>
          ) : (
            <div
              style={{
                marginTop: 20,
                padding: 20,
                background: '#d4edda',
                color: '#155724',
                borderRadius: 10
              }}
            >
              ✅ Order Placed Successfully!
            </div>
          )}
        </>
      )}
    </div>
  )
}