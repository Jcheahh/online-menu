import React from "react";

interface CartItem {
    productId: string;
    amount: number;
}

function useCart() {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    const addToCart = (productId: string) => {
        setCart([
            ...cart,
            {
                productId,
                amount: 1,
            },
        ]);
    };

    const modifyItemAmount = (
        productId: string,
        modify: (amount: number) => number
    ) => {
        const matchIndex = cart.findIndex((p) => p.productId === productId);
        if (matchIndex > -1) {
            const item = cart[matchIndex];
            const newItem = {
                ...item,
                amount: modify(item.amount),
            };
            const itemsBefore = cart.slice(0, matchIndex);
            const itemsAfter = cart.slice(matchIndex + 1, cart.length);
            setCart([...itemsBefore, newItem, ...itemsAfter]);
        } else {
            throw new Error("i");
        }
    };

    const increaseItemInCart = (productId: string) => {
        return modifyItemAmount(productId, (amount) => amount + 1);
    };

    const decreaseItemInCart = (productId: string) => {
        return modifyItemAmount(productId, (amount) => amount - 1);
    };

    const removeCart = (productId: string) => {
        const matchIndex = cart.findIndex((p) => p.productId === productId);
        if (matchIndex > -1) {
            const itemsBefore = cart.slice(0, matchIndex);
            const itemsAfter = cart.slice(matchIndex + 1, cart.length);
            setCart([...itemsBefore, ...itemsAfter]);
        } else {
            throw new Error("This id is not exists");
        }
    };
    return {
        cart,
        addToCart,
        increaseItemInCart,
        decreaseItemInCart,
        removeCart,
    };
}

export default useCart;
