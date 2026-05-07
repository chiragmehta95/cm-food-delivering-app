import { useState } from 'react'

const menu = [
  { id: 1, name: 'Veg Thali', price: 80 },
  { id: 2, name: 'Paneer Rice', price: 120 }
]

function Home() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
    alert('Item Added')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Today's Menu</h1>

      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home