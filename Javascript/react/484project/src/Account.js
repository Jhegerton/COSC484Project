import React from 'react';
import logo from "./images/keys.png";
import './Site.css';

export default function Account(){
    return(
        <div className="Account">
            <header className="Header">
                <img src={logo} className="Site-logo" alt="logo" />
                <h1>Living Spaces</h1>
                <h3>Account Page</h3>
                <p>
                    This is the empty shell that we will create our react.js app.
                </p>
            </header>
            <footer className={"Footer"}>
                <div className={'Links'}>
                    <ul>
                        <li>
                            <a href={'./Login'}>Login</a>
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