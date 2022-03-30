import React from 'react';
import logo from "./images/keys.png";
import './Site.css';

export default function Home(){
    return(
        <div className="Home">
        <header className="Header">
            <img src={logo} className="Site-logo" alt="logo" />
            <h1>Living Spaces</h1>
            <h3>Home Page</h3>
            <p>
                This is the empty shell that we will create our react.js app.
            </p>
        </header>
        <footer className={"Footer"}>
            <div className={'Links'}>
                <ul>
                    <li>
                        <a href={'./Account'}>Account</a>
                    </li>
                    <li>
                        <a href={'./Login'}>Login</a>
                    </li>
                </ul>
            </div>
        </footer>
        </div>
        );
}