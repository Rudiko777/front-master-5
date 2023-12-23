import React, { useState, useEffect } from 'react';

function DrawingButton() {
    const [drawing, setDrawing] = useState(false);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (drawing) {
                const { clientX, clientY } = event;
                setPositions((prevPositions) => [
                    ...prevPositions,
                    { x: clientX, y: clientY },
                ]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [drawing]);

    const handleButtonClick = () => {
        setDrawing(!drawing);
        setPositions([]);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                {drawing ? 'Остановить рисование' : 'Начать рисование'}
            </button>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                {positions.map((position, index) => (
                    <span
                        key={index}
                        style={{
                            position: 'absolute',
                            top: position.y,
                            left: position.x,
                            fontSize: '24px',
                        }}
                    >
            🖌️
          </span>
                ))}
            </div>
        </div>
    );
}

export default DrawingButton;