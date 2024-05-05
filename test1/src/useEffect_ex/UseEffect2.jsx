import React, { useEffect, useState } from 'react';
import Timer from './Timer';

const UseEffect2 = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <button onClick={() => { setShowTimer(!showTimer) }}>Toggle Timer</button>
            {showTimer && <Timer />}
        </div>
    );
};

export default UseEffect2;