import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from 'react-helmet';

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
            <img src={logo} className="Site-logo" alt="logo" />
            <h1>Living Spaces</h1>
            <h3>Sign Up Page</h3>
            <p>
                This is the empty shell that we will create our react.js app.
            </p>
            <a href={'./Login.js'}>Back</a>
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