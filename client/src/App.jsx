export default function App() {
  const foods = [
    {
      id: 1,
      name: "Veg Thali",
      price: 80
    },
    {
      id: 2,
      name: "Paneer Rice",
      price: 120
    }
  ]

  return (
    <div style={{ padding: 40 }}>
      <h1>Food Ordering App</h1>

      {foods.map((food) => (
        <div
          key={food.id}
          style={{
            border: "1px solid #ddd",
            padding: 20,
            marginTop: 20,
            borderRadius: 10
          }}
        >
          <h2>{food.name}</h2>
          <p>₹{food.price}</p>

          <button>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}