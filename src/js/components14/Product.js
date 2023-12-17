import React, { useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Product = ({ id, name, price, addToCart }) => {
    const [{ isDragging }, drag] = useDrag({
        item: {id, name, price },
        type: 'product',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
        </div>
    );
};

export default Product;