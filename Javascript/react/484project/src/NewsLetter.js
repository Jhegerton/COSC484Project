import React from 'react';
import './Site.css';
import {Helmet} from "react-helmet";
export default function QuizCompleted(){

    return(
        <div className="QuizCompleted">

<Helmet>

<meta charset = "UTF-8"/>
    <title> Living Spaces</title>
    <link rel = "stylesheet" type = "text/css" href="site.css"/>

</Helmet>
<body>
<h1> Thank you for signing up to our newsletters</h1>
<p> We will email you on any updates on new living opportunities</p>
<p> You can go back to our main page <a href = HomePage.js>here </a></p>

</body>
        </div>
        );
    }