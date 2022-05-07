import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';

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
                        <label htmlFor={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} required/><br/>
                        <label htmlFor={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} required/><br/>


            <p>Don't Have an Account?</p>
            <p>Sign Up <a href = {'./SignUp'}>Here</a></p>
            </body>
            <footer className={"Footer"}>

            </footer>
        </div>

    );

}
