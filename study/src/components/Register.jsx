import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        id: '',
        password: '',
        name:'',
    });
    const { id, password,name } = form;
    const navigate = useNavigate();

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8080/api/register",form)
        .then(response => {
            console.log(response.data)
            navigate("/login")
        }).catch(error => {
            console.log('전송실패')
        }).then(() => {
        // 항상 실행
        });
    }
    
    return (
    <div>
        <h1>회원가입</h1>
        <form onSubmit={onClick}>
        <label>
            이름
            <input name='name' value={name} onChange={onChange}/>
        </label>
        <label>
            아이디
            <input name='id' value={id} onChange={onChange}/>
        </label>
        <label>
            비밀번호
            <input name='password' value={password} onChange={onChange}/>
        </label>
        <button type="submit">등록</button>
        </form>
        {/* {response && <p>{response.data.message}</p>}
        {response && response.status === 200 && (
        <button onClick={onClick}>로그인 페이지로 이동</button>
        )} */}
    </div>
    );
};

export default Register;
