import React, { useRef, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import styles from './Basket.module.css';

const Basket = () => {
    const [products, setProducts] = useState([
        { id: 1, title: 'product1', price: 17000, quantity: 1 },
        { id: 2, title: 'product2', price: 35000, quantity: 1 },
        { id: 3, title: 'product3', price: 45000, quantity: 1 },
    ]);
    const [sortBy, setSortBy] = useState(null);

    const sortProducts = () => {
        const sortedProducts = [...products];

        if (sortBy === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(sortedProducts);
    };

    const deleteObject = () => {
        const updatedProducts = products.slice(1); // Создаем новый массив, начиная со второго элемента
        setProducts(updatedProducts);
        console.log(updatedProducts);
    };

    const increaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const decreaseQuantity = (productId) => {
        const updatedProducts = products.map((product) => {
            if (product.id === productId && product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const getTotalPrice = () => {
        const totalPrice = products.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);
        return totalPrice;
    };

    const filterArray = (array, a, b) => {
        const filteredArray = array.filter((element) => element.price >= a && element.price <= b);
        return setProducts(filteredArray);
    };


    const insertObject = () => {
        const lengthProduct = products.length;
        const upgradeProducts = [
            ...products,
            {
                id: lengthProduct === 0 ? 1 : products[products.length - 1].id + 1,
                title: `product${lengthProduct}`,
                price: Math.floor(Math.random() * 10001),
                quantity: 1,
            },
        ];
        setProducts(upgradeProducts);
    };

    return (
        <>
            <div className={styles.basketBox}>
                <ShoppingCart style={{ cursor: 'pointer' }} onClick={deleteObject} />
            </div>
            <div className={styles.btnsBox}>
                <button className={styles.plus} onClick={insertObject}>
                    +
                </button>
                <span>{products.length}</span>
                <button className={styles.minus} onClick={() => setProducts([])}>
                    -
                </button>
            </div>
            <div style={{padding: "50px 0"}}>
                <h1>Фильтр</h1>
                <input placeholder={"Введите значение A"} id={"A"}/>
                <input placeholder={"Введите значение B"} id={"B"}/>
                <button onClick={() => filterArray(products, document.getElementById('A').value, document.getElementById('B').value)}>
                    Применить фильтр
                </button>
            </div>
            <div style={{padding: "20px 0"}}>
                <h1>Сортировка</h1>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="asc"
                        checked={sortBy === 'asc'}
                        onChange={() => setSortBy('asc')}
                    />
                    По возрастанию
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="desc"
                        checked={sortBy === 'desc'}
                        onChange={() => setSortBy('desc')}
                    />
                    По убыванию
                </label>
                <button onClick={sortProducts}>
                    Применить сортировку
                </button>
            </div>
            <div className={styles.itemList} style={{ color: 'black' }}>
                {products.map((el) => {
                    return (
                        <div className={styles.item} key={el.id}>
                            <p>{el.id}</p>
                            <p>{el.title}</p>
                            <p>{el.price}</p>
                            <p>
                                Quantity: {el.quantity}
                                <button
                                    className={styles.plus}
                                    onClick={() => increaseQuantity(el.id)}
                                >
                                    +
                                </button>
                                <button
                                    className={styles.minus}
                                    onClick={() => decreaseQuantity(el.id)}
                                >
                                    -
                                </button>
                            </p>
                            <p>Total: {el.price * el.quantity}</p>
                        </div>
                    );
                })}
            </div>
            <p>Total Price: {getTotalPrice()}</p>
        </>
    );
};

export default Basket;

