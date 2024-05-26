/* eslint-disable */
import React from 'react';
import { useState } from 'react';

const UseState3 = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = e => {
        alert(username + ":" + message);
        setForm({
            username: '',
            message: '',
        });
    }

    const onKeyDown = e => {
        if (e.key == 'Enter') {
            onClick();
        }
    }


    return (
        <div>
            <input type="text" name='username' value={username} onChange={onChange} />
            <br />
            <input type="text" name='message' value={message} onChange={onChange} onKeyDown={onKeyDown} />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default UseState3;