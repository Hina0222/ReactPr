import React, { useCallback, useEffect, useState } from 'react';

const UseCallback1 = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunc = useCallback(() => {
        console.log(`someFunc: number:${number}`);
        return;
    }, [number]);
    //함수 객체여서 랜더링되면 새로운 함수가 됨

    useEffect(() => {
        console.log("somfunc변경")
    }, [someFunc])

    return (
        <div>
            <input type="number"
                value={number}
                onChange={(e) => { setNumber(e.target.value) }} />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunc}>Call</button>
        </div>
    );
};

export default UseCallback1;