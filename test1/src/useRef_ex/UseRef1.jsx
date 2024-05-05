/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';

const UseRef1 = () => {
    const [count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('렌더링 수:', renderCount.current);
    })

    return (
        <div>
            <div>count:{count}</div>
            <button onClick={() => { setCount(count + 1) }}>클릭</button>
        </div>
    );
};

export default UseRef1;

/*
const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0); // countRef.current
    let countVar = 0;

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref:', countRef.current);
        // 랜더링하면 출력됨,값 유지O
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('Var:', countVar);
        // 랜더링해도 출력안됨,값 유지X
    }
    const doRendering = () => {
        setRenderer(renderer + 1);
    }

    return (
        <div>
            <p>Ref:{countRef.current}</p>
            <button onClick={increaseRef}>클릭</button>
            <p>countVar:{countVar}</p>
            <button onClick={increaseVar}>클릭</button>
            <button onClick={doRendering}>렌더링</button>
        </div>
    );
*/