import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';
import LoginToJSON from './Forms'

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
                <form method={'post'} action={'./mongo'} id={'login'}>
                    <fieldset>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'}/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'}/><br/>
                        <input type={'submit'} onSubmit={LoginToJSON}/>
                    </fieldset>
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