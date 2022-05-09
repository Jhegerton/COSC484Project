import React from 'react';
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
                <img src={logo} className="Site-logo" alt="logo" />
                <h1>Living Spaces</h1>
                <h3>Login Page</h3>
                <div className="data">{data ? <p>{data}</p> : null}</div>
                <form id={'login'} onSubmit={handleSubmit}>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} value={username} onChange={(e) => setUsername(e.target.value)} required/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
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