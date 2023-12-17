import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {useState} from "react";
import Product from "./Product";
import Cart from "./Cart";

const DragonDrop = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const handleDrop = (item) => {
        addToCart(item);
    };

    return (
        <div style={{ padding: '100px 0' }}>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <h2>Products</h2>
                    {products.map((product) => (
                        <Product key={product.id} id={product.id} name={product.name} price={product.price} addToCart={addToCart} />
                    ))}
                </div>
                <div>
                    <h2>Cart</h2>
                    <Cart items={cartItems} onDrop={handleDrop}/>
                </div>
            </DndProvider>
        </div>
    );
};

export default DragonDrop;