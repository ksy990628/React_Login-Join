import React from 'react';
import styled from 'styled-components';
import {Route,Link} from "react-router-dom";


const Box = styled.div`
background-color :#AC58FA;
color:white;
width:250px;
height:250px;
padding : 10px;
`;

const Button = styled.button`
margin : 15px;
width : 200px;
height : 30px;
background-color: white;
font-size: 20px;
color:#AC58FA;
border:0px;
`;



const Main = () => {
    return(
        <Box>
            <h1> RE : Coder </h1>
            <br/>
            <Button><Link to={"/SignIn"}>회원가입</Link></Button>
            <Button><Link to={"/Login"}>로그인</Link></Button>
        </Box>
    );
};
export default Main;