import React, {useCallback, useEffect, useState} from "react";
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';

const SignInBox = styled.div`
background-color :#AC58FA;
color: white;
width:300px;
height:400px;
padding : 10px;
`;

const Btn = styled.div`
width :300px;
padding-top:20px;
padding-left:90px;
`;


const SignIn = () =>{
    const [name,setName] = useState("");
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setcheckPasswrd] = useState("");
    const [msg,setMsg] = useState("");

    const [success,setSuccess] = useState(false);

    const memberName = useCallback((e) => {
        setName(e.target.value);
    },[]);
    const memberID = useCallback((e) => {
        setId(e.target.value);
    },[]);
    const memberPW = useCallback((e) => {
        setPassword(e.target.value);
    },[]);
    const checkPW = useCallback((e) => {
            setcheckPasswrd(e.target.value);
    },[]);

    useEffect(() => {
        if (password !== checkPassword){
            setMsg("비밀번호가 일치하지 않습니다.");
            setSuccess(false);
        }
    },[checkPassword,password]);

    const onSubmit = () => {
        if ((id==='') || (name==='') || (password==='' || (checkPassword===''))) {
            setSuccess(false);
        }
        else if (msg!==""){
            alert("비밀번호가 일치하지 않습니다!");
        }
        else
            setSuccess (true);
    };

    return (
        <SignInBox>
            <h1> Sign in </h1>
        <br/>
            <h3> 이름 : <input
                type="text"
                name="name"
                placeholder="이름"
                value={name}
                onChange={memberName}
            /></h3>
            <h3> 아이디 : <input
                type="text"
                name="id"
                placeholder="아이디"
                value={id}
                onChange={memberID}
            /></h3>
            <h3> 비밀번호 : <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={memberPW}
            /></h3>
            <h3> 비밀번호 확인 : <input
                type="password"
                name="checkPassword"
                placeholder="비밀번호확인"
                value={checkPassword}
                onChange={checkPW}
            /></h3>

            <h6>{msg}</h6>

            <Btn>
            <button><Link to={"/"}>홈</Link></button>
            <button onClick={onSubmit}>입력완료</button>
            <Link to = {`/SuccessSignIn/${id}`}><button onClick={onSubmit} disabled={!success}>가입</button></Link>
        </Btn>
        </SignInBox>
    );
};

export default SignIn;





