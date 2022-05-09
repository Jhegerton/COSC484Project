import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';
import { useState } from "react";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3100/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setUsername("");
            setPassword("");
            setData(resJson.value);
          } else {
            setData("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
    };
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
            <div className = {'links'}>
                <ul>
                    <li> <a href= './'>Home</a></li>
                    <li><a href={'./Login'}>Login</a></li>
                    <li> <a href= './About'>About Us</a></li>
                    <li> <a href= './ConfirmRoommateQuiz'>Roommate Quiz</a></li>
                    <li> <a href= './apartments'>Available Apartments</a></li>
                </ul>
            </div>
            <a href={'./'}><img src={logo} className="Site-logo" alt="logo" /></a>
                <h1>Living Spaces</h1>
                <h3>Login Page</h3>
                <div className="data">{data ? <p>{data}</p> : null}</div>
                <form id={'myForm'} onSubmit={handleSubmit}>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} value={username} onChange={(e) => setUsername(e.target.value)} required/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
                        <input type={'submit'}/>
                </form>
            <p>Don't Have an Account?</p>
            <Link to={'../signup'} id={'sign-up-link'}><h5>&gt;&gt;Sign Up Here&lt;&lt;</h5></Link>
            </body>
            <footer className={"Footer"}>

            </footer>
        </div>

    );

}