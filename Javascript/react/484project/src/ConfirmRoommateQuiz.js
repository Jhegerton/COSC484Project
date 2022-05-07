import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import {Helmet} from "react-helmet";
export default function ConfirmRoommateQuiz() {

return(

    <div className ="ConfirmRoommateQuiz">
    <Helmet>
        <meta charset="UTF-8"/>
        <title> ConfirmRoommateQuiz </title>
        <link rel="stylesheet" type="text/css" href="site.css"/>
    </Helmet>

    <body className = "Body">
    <div className = {'links'}>
        <ul>
            <li> <a href= './'>Home</a></li>
            <li><a href={'./Login'}>Login</a></li>
            <li> <a href= './About'>About Us</a></li>
            <li> <a href= './ConfirmRoommateQuiz'>Roommate Quiz</a></li>
            <li> <a href= './apartments'>Available Apartments</a></li>
        </ul>
    </div>
    <img src={logo} id='logo' alt='keys_logo' className ="image1"/>

        <h1> Living Spaces </h1>

        <p> Here is the Roommate quiz to find you roommates that fit your lifestyle </p>
        <p> Once the quiz starts you can not exit until the quiz is complete or your progress will be lost </p>

    <form id={'login'} method={'GET'} action={'./RoommateQuiz'}>
        <input type={'submit'} value = 'Start'/>
    </form>

    </body>
        <footer className="Footer">

        </footer>
    </div>
);
}
