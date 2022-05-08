import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';
import { useNavigate } from "react-router-dom";


export default function Login(){
    return(
    <div className="Login">
            <Helmet>
                <title>Login</title>
                <meta
                    name={"Social Media site for college students to find roommates"}
                />
                <link rel="icon" type="image/png" sizes="32x32" href="./images/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="./images/icons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./images/icons/favicon-16x16.png"/>

            </Helmet>

            <body className="Body">
                <img src={logo} className="Site-logo" alt="logo" />
                <h1>Living Spaces</h1>
                <h3>Login Page</h3>
                <form id={'login'} method={'POST'} action={'http://localhost:3100/login'} onSubmit={funcLogin('/login')}>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} required/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} required/><br/>
                        <input type={'submit'}/>
                </form>
            </body>
            <footer className={"Footer"}>
                <div className={'Links'}>
                    <ul>
                        <li>
                            <a href={'./Account'}>Account</a>
                        </li>
                        <li>
                            <a href={'./'}>Home</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    );

}
async function funcLogin(url){
    const response = await fetch(url);
    var data = await response.json();
    if (data.value){
        alert("You are logged in");
    }
}
