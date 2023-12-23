import React, { useState } from 'react';

const ShoppingCart = () => {
    const [items, setItems] = useState([
        { name: "Товар 1", quantity: 1, price: 10 },
        { name: "Товар 2", quantity: 2, price: 20 },
        { name: "Товар 3", quantity: 3, price: 30 }
    ]);

    const increaseQuantity = (index) => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems[index].quantity++;
            return newItems;
        });
    };

    const sortItemsByPriceAscending = () => {
        const sortedItems = [...items].sort((a, b) => a.price - b.price);
        setItems(sortedItems);
    };

    const sortItemsByPriceDescending = () => {
        const sortedItems = [...items].sort((a, b) => b.price - a.price);
        setItems(sortedItems);
    };

    const calculateTotalCost = () => {
        let total = 0;
        items.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;
    };

    return (
        <div>
            <h1>Корзина</h1>

            <button onClick={sortItemsByPriceAscending}>Сортировать по возрастанию цены</button>

            <button onClick={sortItemsByPriceDescending}>Сортировать по убыванию цены</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} ({item.quantity}) - {item.price} руб.
                        <button onClick={() => increaseQuantity(index)}>+</button>
                    </li>
                ))}
            </ul>

            <p>Итоговая стоимость: {calculateTotalCost()} руб.</p>
        </div>
    );
};

export default ShoppingCart;