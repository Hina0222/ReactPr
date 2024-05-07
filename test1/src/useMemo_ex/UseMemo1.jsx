import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
    console.log('어려운계산');
    return number + 10000;
};

const UseMemo1 = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [input, setInput] = useState('');

    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number"
                value={hardNumber}
                onChange={(e) => { setHardNumber(parseInt(e.target.value)) }} />
            <span>+10000 = {hardSum}</span>
            <br />
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </div>
    );
};

export default UseMemo1;