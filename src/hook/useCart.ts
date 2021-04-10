import React from "react";

interface CartItem {
    productId: string;
    amount: number;
}

interface CartContext {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    modifyItemAmount: (
        productId: string,
        modify: (amount: number) => number
    ) => void;
    increaseItemInCart: (productId: string) => void;
    decreaseItemInCart: (productId: string) => void;
    removeCartItem: (productId: string) => void;
}

export const cartContext = React.createContext<CartContext | null>(null);

export function useCart() {
    return React.useContext(cartContext);
}

export function useProvideCart(): CartContext {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        try {
            modifyItemAmount(item.productId, (amount) => amount + item.amount);
        } catch (error) {
            setCart([...cart, item]);
        }
    };

    // Modify item amount in cart, remove if lesser than 0
    const modifyItemAmount = (
        productId: string,
        modify: (amount: number) => number
    ) => {
        const matchIndex = cart.findIndex((p) => p.productId === productId);
        if (matchIndex > -1) {
            const item = cart[matchIndex];
            const itemsBefore = cart.slice(0, matchIndex);
            const itemsAfter = cart.slice(matchIndex + 1, cart.length);

            const newAmount = modify(item.amount);

            if (newAmount < 1) {
                setCart([...itemsBefore, ...itemsAfter]);
            } else {
                const newItem = {
                    ...item,
                    amount: newAmount,
                };

                setCart([...itemsBefore, newItem, ...itemsAfter]);
            }
        } else {
            throw new Error("item not found");
        }
    };

    const increaseItemInCart = (productId: string) => {
        modifyItemAmount(productId, (amount) => amount + 1);
    };

    const decreaseItemInCart = (productId: string) => {
        modifyItemAmount(productId, (amount) => amount - 1);
    };

    const removeCartItem = (productId: string) => {
        modifyItemAmount(productId, (_amount) => 0);
    };
    return {
        cart,
        addToCart,
        modifyItemAmount,
        increaseItemInCart,
        decreaseItemInCart,
        removeCartItem,
    };
}
