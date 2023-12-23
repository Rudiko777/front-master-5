import React, { useState } from 'react';

function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleButtonClick = () => {
        setLiked(!liked);
    };

    return (
        <button
            style={{ backgroundColor: liked ? 'blue' : 'gray' }}
            onClick={handleButtonClick}
        >
            Нравится
        </button>
    );
}

export default LikeButton;