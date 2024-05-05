/* eslint-disable */
import React, { useEffect, useRef } from 'react';

const UseRef2 = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
    }, [])

    const login = () => {
        alert(`아이디: ${inputRef.current.value}!`);
        inputRef.current.focus();

    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder='username' />
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default UseRef2;