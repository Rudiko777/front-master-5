import React, { useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const Cart = ({items, onDrop}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'product',
        drop: (item) => {
            onDrop(item);
        },
        collect: (monitor) => ({
            canDrop: !!monitor.canDrop(),
            isOver: !!monitor.isOver(),
        }),
    }));

    const isActive = canDrop && isOver;

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div ref={drop} style={{ backgroundColor: isActive ? 'lightgreen' : 'white' }}>
            {items.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Price: {item.price}</p>
                </div>
            ))}
            <h4>Total Price: {getTotalPrice()}</h4>
            <h4>Total count: {items.length}</h4>
        </div>
    );
};

export default Cart;