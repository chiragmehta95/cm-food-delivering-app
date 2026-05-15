import {
  createContext,
  useContext,
  useState
} from 'react'

const CartContext = createContext()

export const CartProvider = ({
  children
}) => {
  const [cartItems, setCartItems] =
    useState([])

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id
      )

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity:
                  i.quantity + 1
              }
            : i
        )
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1
        }
      ]
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}