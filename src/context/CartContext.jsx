import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!alreadyInCart(item.id))
        {
            setCart(prev => [...prev, {...item, quantity}]);
        } 
        else
        {
            console.error('El producto ya fue agregado al carrito');
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const alreadyInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const total = () => {
        return cart.reduce((acc, game)=> acc + (game.price * game.quantity), 0);
    }

    const gamesQuantity = () => {
        return cart.reduce((acc, game) => acc + game.quantity, 0);
    }

    return (
        <CartContext.Provider value={{cart, gamesQuantity, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}