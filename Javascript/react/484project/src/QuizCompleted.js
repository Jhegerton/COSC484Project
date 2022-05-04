import React from 'react';
import './Site.css';
import {Helmet} from "react-helmet";
export default function QuizCompleted(){

    return(
        <div className="QuizCompleted">
        <Helmet>

<link rel = "stylesheet" type = "text/css" href="site.css"/>

        </Helmet>
<body className = "Body">

<h1> Thank you for submitting your Roommate Quiz </h1>
<p> We will try our best to pair you up with the best roommate possible</p>
<p> In the meantime please return back to our main page <a href = {'./'} >here</a></p>
</body>
            <footer className = "Footer">

            </footer>
</div>
);
}
