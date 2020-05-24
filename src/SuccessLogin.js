import React from "react";
import styled from 'styled-components';
import {Route, Link} from "react-router-dom";

const text = styled.div`
  text-align: center;
  color: #AC58FA;
`;

const SuccessLogin = ({match}) => {
    return (
        <div>
            <text><h1>{match.params.id}님 로그인하셨습니다.</h1></text>
            <br />
            <button><Link to={"/"}>홈</Link></button>
            <button><Link to={"/"}>로그아웃</Link></button>
        </div>
    );
};
export default SuccessLogin;
