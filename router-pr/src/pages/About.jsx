import React from 'react';
import { useSearchParams } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';


const About = () => {
    //const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    const detail = searchParams.get('detail');

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false : true });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({ mode: nextMode, detail });
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 연습</p>
            <p>mode: {mode}</p>
            <p>detail : {detail}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>

            {/* <p>쿼리스트링: {location.search}</p> */}
        </div>
    );
};

export default About;