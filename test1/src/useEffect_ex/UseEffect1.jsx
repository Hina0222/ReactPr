/*eslint-disable*/
import React, { useState, useEffect } from 'react';

const UseEffect1 = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };
    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 랜더링 될때마다 실행
    useEffect(() => {
        console.log('랜더링');
    });
    // 마운팅+ count 변화
    useEffect(() => {
        console.log('count 변화');
    }, [count]);

    // 마운팅+ name 변화
    useEffect(() => {
        console.log('name 변화');
    }, [name]);

    return (
        <div>
            <button onClick={handleCountUpdate}>클릭</button>
            <div>count:{count}</div>
            <br />
            <input type="text" value={name} onChange={handleInputChange} />
            <div>name:{name}</div>
        </div>
    );
};

export default UseEffect1;