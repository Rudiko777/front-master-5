import React, { useState } from 'react';
import heart from '../../images/AnyPage/heart.png'

const DrawingButton = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [dots, setDots] = useState([]);

    const handleButtonClick = () => {
        if (!isDrawing){
            dots.length = 0;
        }
        setIsDrawing(prevIsDrawing => !prevIsDrawing);
    };

    const handleMouseMove = event => {
        if (isDrawing) {
            const newDots = [...dots];
            newDots.push({ x: event.clientX - 20, y: event.clientY - 20});
            setDots(newDots);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {isDrawing ? 'Остановить рисование' : 'Рисование'}
            </button>
            <div
                style={{ position: 'relative', width: '100%', height: '300px', border: '1px solid #ccc' }}
                onMouseMove={handleMouseMove}
            >
                {dots.map((dot, index) => (
                    <img
                        key={index}
                        style={{
                            position: 'absolute',
                            left: dot.x + "px",
                            top: dot.y + "px",
                            width: "20px",
                            height: "20px"
                        }}
                        alt={"Error"}
                        src={heart}
                    />
                ))}
            </div>
        </div>
    );
};

export default DrawingButton;