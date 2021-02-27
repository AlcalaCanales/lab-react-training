import React from 'react';

const Random = ({max, min }) => {
    const randomValue = Math.floor(Math.random() * (max - min) + min);
    return (
        <div class="box">
            <p class="box-text">Random value between {min} and {max} => {randomValue}</p>
        </div>
    )
}

export default Random;