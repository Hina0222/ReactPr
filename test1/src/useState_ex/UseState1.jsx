/* eslint-disable*/
import React, { useState, useEffect } from 'react';

const UseState1 = () => {
    // const [count, setCount] = useState(0);
    // console.log("State", count)

    // useEffect(() => {
    //     setCount(1);
    // }, [count])

    // const [count, setCount] = useState(0);
    // console.log("State", count)

    // useEffect(() => {
    //     setCount(1);
    //     return () => {
    //         console.log("State", count)
    //     }//cleanup Function
    // }, [count])

    // const [count, setCount] = useState(0);
    // console.log("State", count)

    // useEffect(() => {
    //     setCount(1);//set함수는 비동기
    //     console.log("State", count)
    //     setCount(2);
    //     console.log("State", count)
    //     setCount(3);
    //     console.log("State", count)
    // }, [count])

    // const [count, setCount] = useState(0);
    // console.log("State", count)

    // useEffect(() => {
    //     setCount(prev => prev + 1)
    //     setCount(prev => prev + 1)
    //     setCount(prev => prev + 1)
    // }, [])

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    console.log("Value", value)
    useEffect(() => {
        setCount(prev => prev + 3)
        setCount(prev => prev + 3)
        setValue(count)
    }, [])
    return (
        <div>
            <span>{count}</span>
        </div>
    );
};

export default UseState1;