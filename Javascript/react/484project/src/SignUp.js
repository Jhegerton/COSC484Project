import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';
import {Link} from "react-router-dom";

export default function SignUp(){
    return(
        <div className="SignUp">
            <Helmet>
                <title>Sign Up</title>
                <meta
                    name={"Social Media site for college students to find roommates"}
                />
                <link rel="icon" type="image/png" sizes="32x32" href="./images/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="./images/icons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./images/icons/favicon-16x16.png"/>

            </Helmet>

            <body className="Body">
            <ul>
                <li> <a href= './'>Home</a></li>
                <li><a href={'./Login'}>Login</a></li>
                <li> <a href= './About'>About Us</a></li>
                <li> <a href= './ConfirmRoommateQuiz'>Roommate Quiz</a></li>
                <li> <a href= './apartments'>Available Apartments</a></li>
            </ul>
            <img src={logo} className="Site-logo" alt="logo" />
            <h1>Living Spaces</h1>
            <h3>Sign Up Page</h3>

            <form id={'signup'} method={'GET'} action={'http:localhost:3000/'}>

            <label htmlFor={'username'}>Username</label><br/>
            <input type={'text'} id={'username'} name={'username'} required/><br/>
            <label htmlFor={'email'}>Email</label><br/>
            <input type={'email'} id={'email'} name={'email'} required/><br/>
            <label htmlFor={'password'}>Password</label><br/>
            <input type={'password'} id={'password'} name={'password'} required/><br/>
            <label htmlFor={'password'}>Verify Password</label><br/>
            <input type={'text'} id={'username'} name={'username'} required/><br/>
                <input type={'submit'} value = 'Sign Up'/><br/>
            </form>
            <Link to={'../Login'} id={'back-to-login'}><h5>&gt;&gt;Back&lt;&lt;</h5></Link>
            </body>
            <footer className={"Footer"}>

            </footer>
        </div>

    );

}