/* eslint-disable*/
import React, { useState } from 'react';

const UseState1 = () => {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    return (
        <div>
            <span>{time}</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default UseState1;