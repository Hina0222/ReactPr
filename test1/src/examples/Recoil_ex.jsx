import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

// 별도의 파일로 분리해서 사용 export
const countState = atom({
    key: "count",
    default: 10
});

function Counter() {
    const [count, setCount] = useRecoilState(countState);
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => { setCount(count + 1) }}>
                +
            </button>
            {count}
        </div >
    )
}
function DisplayCounter() {
    const count = useRecoilValue(countState);
    return <div>{count}</div>
}

const recoil_ex = () => {
    return (
        <div>
            <Counter />
            <DisplayCounter />
        </div>
    );
};

export default recoil_ex;