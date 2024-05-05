import React, { useEffect } from 'react';

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머돌아감');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        }
    }, []);

    return (
        <div>
            <span>타이머를 시작</span>
        </div>
    );
};

export default Timer;