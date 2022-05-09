import React from 'react';
import "./Site.css";
import "./Slideshow";
import Helmet from "react-helmet";
import {Slideshow} from "./Slideshow";
export default function About(){
    return(
        <div className="About">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Slideshow/>
            <body className="Body">
            <h1>About Us</h1>
            <p>
                Living Spaces was founded in August 2022. Created by 6 students to offer a way to give back to the student body.
                What makes us emerge and create this company was our own personal experiences of struggling to find housing and most importantly a roommate to help cut costs.
                Our Quiz consists of questions consisting of preferences that will aid students in finding their ideal roommate based on how many answers match to other students who have taken our quiz.

                Want results? Go to our homepage to see our reviews!
            </p>
            <h3>Sign Up</h3>
            <p>
                Simply create an account with us the take our quiz  to find your ideal roommate today
            </p>
            </body>
            <footer className={"Footer"}>
                <div className={'Back'}>
                    <a href={'./'}>Home</a>
                </div>
            </footer>
        </div>
    )
}