import React, {useState} from 'react';
import styles from './Ex14All.module.css'

const Ex14Task3 = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemClick = (item, event) => {
        event.preventDefault();

        if (event.ctrlKey || event.metaKey) {
            const isSelected = selectedItems.includes(item);
            const updatedSelection = isSelected
                ? selectedItems.filter((selectedItem) => selectedItem !== item)
                : [...selectedItems, item];

            setSelectedItems(updatedSelection);
        } else {
            setSelectedItems([item]);
        }
    };

    const itemList = ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'];

    return (
        <ul className={styles.ul}>
            <h1 style={{textAlign: 'center', fontSize:'24px'}}>Ex14_3</h1>
            {itemList.map((item, index) => (
                <li
                    key={index}
                    onClick={(event) => handleItemClick(item, event)}
                    className={selectedItems.includes(item) ? styles.selected : ''}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default Ex14Task3;