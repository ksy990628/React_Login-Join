import React, {Component} from 'react';
import styled from 'styled-components';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Main from './Main';
import Login from './Login';
import SignIn from './SignIn';
import SuccessLogin from "./SuccessLogin";
import SuccessSignIn from "./SuccessSignIn";
import NotFound from "./NotFound";

const App = () =>{
    return(
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/Login" component={Login} />
                <Route path="/SuccessLogin/:id" component={SuccessLogin} />
                <Route path="/SuccessSignIn/:id" component={SuccessSignIn} />
                <Route path="/404NotFound" component={NotFound} />
                <Redirect from="*" to={"/404NotFound"}/>
            </ Switch>
        </div>
    );
  };
export default App;
