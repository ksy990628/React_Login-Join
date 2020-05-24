import React, {useCallback, useState} from "react";
import styled from 'styled-components';
import {Route,Link} from "react-router-dom";

const LoginBox = styled.div`
background-color :#AC58FA;
color:white;
width:200px;
height:200px;
padding : 10px;
`;

const Btn = styled.div`
width :200px;
padding-top:30px;
padding-left:50px;
`;

const Login = () => {
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const memberID = useCallback((e) => {
        setId(e.target.value);
    },[]);
    const memberPW = useCallback((e) => {
        setPassword(e.target.value);
    },[]);
    return(
            <LoginBox>
                <h1> Login </h1>
            <input
                type="text"
                name="id"
                placeholder="아이디"
                onChange={memberID}
            />

            <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={memberPW}
            />
            <br />
            <Btn>
            <button><Link to={"/"}>홈</Link></button>
            <button><Link to={`/SuccessLogin/${id}`}>로그인</Link></button>
            </Btn>
            </LoginBox>
    );
};

export default Login;