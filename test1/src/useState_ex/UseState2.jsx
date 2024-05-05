/* eslint-disable*/
import React, { useState } from 'react';
const UseState2 = () => {

    const heavyWork = () => {
        console.log('무거운 작업');
        return [];
    }

    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleClick = () => {
        //setNames([input, ...names]);
        setNames((prevState) => {
            return [input, ...prevState];
        });
        setInput('');
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleClick}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    );
};

export default UseState2;