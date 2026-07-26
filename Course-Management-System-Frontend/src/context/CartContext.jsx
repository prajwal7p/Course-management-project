import { createContext, useState } from "react";

export const CartContext = createContext();

const normalizeCourse = course => ({
  ...course,
  id: course.id ?? course._id,
  title: course.c_name ?? course.title,
  image: course.c_image ?? course.image,
  price: Number(course.c_fee ?? course.price) || 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    const itemToAdd = normalizeCourse(course);

    setCart(currentCart => {
      const exists = currentCart.find(item => item.id === itemToAdd.id);

      return exists
        ? currentCart.map(item =>
            item.id === itemToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...currentCart, { ...itemToAdd, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
