import React from 'react';
import './Site.css';
import {Helmet} from "react-helmet";
export default function RoommateQuiz(){

   return(

       <div className = "RoommateQuiz">
    <Helmet>

<title> Roommate Quiz </title>
<link rel = "stylesheet" type = "text/css" href="site.css"/>
</Helmet>

<body>

<form name = "contact" method = "get" action = "QuizCompleted.js">
<h1> Roommate Questionnaire </h1>

<p> Which type of Housing are you looking for </p>
<input type = "radio" name = "Q1" required = "required"/> <label> On Campus </label>
<input type = "radio" name = "Q1" required = "required"/> <label> Off Campus </label>

    <p> Will you be bringing a pet</p>
<input type = "radio" name = "Q2" required = "required"/> <label> Yes</label>
<input type = "radio" name = "Q2" required = "required"/> <label> No</label>

    <p> Are you ok with living with someone with pets</p>
<input type = "radio" name = "Q3" required = "required"/> <label> Yes </label>
<input type = "radio" name = "Q3" required = "required"/> <label> No </label>

    <p> Do you Drink or Smoke</p>
<input type = "radio" name = "Q4" required = "required"/> <label> Yes </label>
<input type = "radio" name = "Q4" required = "required"/> <label> No </label>
<p> Are you ok with others Drinking and Smoking</p>
<input type = "radio" name = "Q5" required = "required"/> <label> Yes </label>
<input type = "radio" name = "Q5" required = "required"/> <label> No </label>

    <p> How late do you go to bed</p>
<input type = "radio" name = "Q6" required = "required"/> <label> Before 10pm </label>
<input type = "radio" name = "Q6" required = "required"/> <label> 10pm to 11pm </label>
<input type = "radio" name = "Q6" required = "required"/> <label> 11pm to 12am </label>
<input type = "radio" name = "Q6" required = "required"/> <label> Past 12am</label>

    <p> What time do you consider it quiet hours during the week</p>
<input type = "radio" name = "Q7" required = "required"/> <label> Before 10pm </label>
<input type = "radio" name = "Q7" required = "required"/> <label> 10pm to 11pm </label>
<input type = "radio" name = "Q7" required = "required"/> <label> 11pm to 12am </label>
<input type = "radio" name = "Q7" required = "required"/> <label> Past 12am</label>

    <p> How do you describe your cleaning habits</p>
<input type = "radio" name = "Q8" required = "required"/> <label> Never </label>
<input type = "radio" name = "Q8" required = "required"/> <label> Once a week </label>
<input type = "radio" name = "Q8" required = "required"/> <label> Twice a week </label>
<input type = "radio" name = "Q8" required = "required"/> <label> Every Other Day </label>
<input type = "radio" name = "Q8" required = "required"/> <label> Everyday </label>

    <p> Do you go home on the weekends a lot</p>
<input type = "radio" name = "Q9" required = "required"/> <label> Never </label>
<input type = "radio" name = "Q9" required = "required"/> <label> Once a Month </label>
<input type = "radio" name = "Q9" required = "required"/> <label> Twice a Month </label>
<input type = "radio" name = "Q9" required = "required"/> <label> Every Weekend </label>

    <p> Are you Comfoartable Sharing </p>
<input type = "radio" name = "Q10" required = "required"/> <label> Yes </label>
<input type = "radio" name = "Q10" required = "required"/> <label> No </label>

<input type = "submit" />
</form>
</body>



</div>
    );
    }

