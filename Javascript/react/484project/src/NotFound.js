import React from 'react';
import logo from "./images/QMark.png";
import './Site.css';
import {Helmet} from "react-helmet";

export default function NotFound(){
    return(
        <div className="NotFound">
            <Helmet>
                <title>Error 404</title>
                <meta
                    name={"Social Media site for college students to find roommates"}
                />
                <link rel="icon" type="image/png" sizes="32x32" href="./images/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="./images/icons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./images/icons/favicon-16x16.png"/>
            </Helmet>
            <body className="Body">
            <a href={'./'}><img src={logo} className="Site-logo" alt="logo" /></a>
            <h1>Error 404</h1>
            <h3>Page not found</h3>
            </body>
            <footer className={"Footer"}>
                <div className={'Back'}>
                    <a href={'./'}>Home</a>
                </div>
            </footer>
        </div>
    );
}