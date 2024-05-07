import React, { useEffect, useMemo, useState } from 'react';

const UseMemo2 = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return { country: isKorea ? '한국' : '외국', }
    }, [isKorea]);
    // {
    //     country: isKorea ? '한국' : '외국',
    // };// object타입은 똑같지 않음(참조주소가 바뀐다)..

    useEffect(() => {
        console.log("useEffect 호출");
    }, [location]);

    return (
        <div>
            <h2>밥 얼만큼</h2>
            <input type="number"
                value={number}
                onChange={(e) => { setNumber(e.target.value) }} />
            <hr />
            <h2>어느 나라</h2>
            <p>나라:{location.country}</p>
            <button onClick={() => { setIsKorea(!isKorea) }}>클릭</button>
        </div>
    );
};

export default UseMemo2;