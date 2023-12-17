import React, { useState } from 'react';
import styles from './Ex14All.module.css'
import car1 from '../../images/AnyPage/item1.jpeg'
import car2 from '../../images/AnyPage/item2.jpg'
import car3 from '../../images/AnyPage/item3.jpeg'
import car4 from '../../images/AnyPage/item4.jpeg'


const Ex14Second = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '24px'}}>Ex 14_2</h1>
            <div className={styles.imageGallery}>
                <img
                    src={car1}
                    style={{width: '200px', height: '200px'}}
                    alt={`Image`}
                    onClick={() => handleImageClick(car1)}
                    className={selectedImage === car1 ? 'selected' : ''}
                />
                <img
                    src={car2}
                    style={{width: '200px', height: '200px'}}
                    alt={`Image`}
                    onClick={() => handleImageClick(car2)}
                    className={selectedImage === car2 ? 'selected' : ''}
                />
                <img
                    src={car3}
                    style={{width: '200px', height: '200px'}}
                    alt={`Image`}
                    onClick={() => handleImageClick(car3)}
                    className={selectedImage === car3 ? 'selected' : ''}
                />
                <img
                    src={car4}
                    style={{width: '200px', height: '200px'}}
                    alt={`Image`}
                    onClick={() => handleImageClick(car4)}
                    className={selectedImage === car4 ? 'selected' : ''}
                />
            </div>
            <div className="selected-image">
                {selectedImage ? (
                    <img style={{width: '100%'}} src={selectedImage} alt="Selected Image" />
                ) : (
                    <p>Изображение не было выбрано</p>
                )}
            </div>
        </div>
    );
};

export default Ex14Second;