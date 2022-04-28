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

    <body>
    <ul className="navigation">
        <li><a href="./HomePage">Home</a></li>
        <li><a href="./about">About Us</a></li>
        <li><a href="./confirmroomatequiz">Roommate Quiz</a></li>
        <li><a href="./apartments">Available Apartments</a></li>
    </ul>
    <img src="keys.png" id=logo alt='keys_logo' class="image1"/>
    <form name="contact" method="get" action = "RoommateQuiz.js">
        <h1> Living Spaces </h1>

        <p> Here is the Roommate quiz to find you roommates that fit your lifestyle </p>
        <p> Once the quiz starts you can not exit until the quiz is complete or your progress will be lost </p>

        <input name="form" type="submit" value="Procced"/>
    </form>
    </body>
    </div>
);
}
