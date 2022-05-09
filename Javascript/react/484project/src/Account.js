import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from "react-helmet";
import { useState } from "react";

export default function Account(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [data, setData] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3100/account", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password2: password2,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setUsername("");
            setPassword("");
            setPassword2("");
            setData(resJson.value);
          } else {
            setData("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
    };
    return(
    <div className="Account">
            <Helmet>
                <title>Account</title>
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
                <li> <a href= './HomePage'>Home</a></li>
                <li><a href={'./Login'}>Login</a></li>
                <li> <a href= './About'>About Us</a></li>
                <li> <a href= './ConfirmRoommateQuiz'>Roommate Quiz</a></li>
                <li> <a href= './apartments'>Available Apartments</a></li>
            </ul>
            </div>
                <img src={logo} className="Site-logo" alt="logo" />
                <h1>Living Spaces</h1>
                <h3>Account Page</h3>
                <div className="data">{data ? <p>{data}</p> : null}</div>
                <form id={'myForm'} onSubmit={handleSubmit}>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} value={username} onChange={(e) => setUsername(e.target.value)} required/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
                        <label for={'password2'}>Verify Password</label><br/>
                        <input type={'password'} id={'password2'} name ={'password2'} value={password2} onChange={(e) => setPassword2(e.target.value)} required/><br/>
                        <input type={'submit'}/>
                </form>
            </body>
            <footer className={"Footer"}>

            </footer>
        </div>
    );

}


