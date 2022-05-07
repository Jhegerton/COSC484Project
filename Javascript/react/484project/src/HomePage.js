import React from 'react';
import logo from "./images/keys.png";
import mh  from "./images/Millennium_Hall.jpeg";
import uv from "./images/UV.jpeg";
import ty from "./images/the_york.jpeg";
import './Site.css';
import {Helmet} from "react-helmet";
export default function HomePage(){

     return(
         <div className = "HomePage">
     <Helmet>
          <meta charset = "UTF-8"/>
          <title> Living Spaces</title>
          <link rel = "stylesheet" type = "text/css" href="site.css"/>
     
     </Helmet>
<body className="Body">
<div className = {'links'}>
    <ul>
        <li> <a href= './'>Home</a></li>
        <li><a href={'./Login'}>Login</a></li>
        <li> <a href= './About'>About Us</a></li>
        <li> <a href= './ConfirmRoommateQuiz'>Roommate Quiz</a></li>
        <li> <a href= './Apartments'>Available Apartments</a></li>
    </ul>
</div>
     <img src = {logo} id = 'logo' alt = 'keys_logo' className = "image1"/>
     <h1> Living Spaces </h1>
     <h3> Allowing Students to find good housing on and off campus </h3>

     <h3> You could live in one of these great apartments and many more! </h3>
     <table>
          <tr>
               <th><img src = {uv} id = 'uv' alt = 'uv_logo' className = "image2"/>
               <figcaption>University Village</figcaption></th>
               <th><img src = {mh} id = 'mh' alt = 'mh_logo' className = "image3"/>
                    <figcaption>Millennium Hall</figcaption></th>
               <th><img src = {ty} id = 'ty' alt = 'ty_logo' className = "image4"/>
                    <figcaption>The York</figcaption></th>
          </tr>
     </table>

</body>

<footer className="Footer">
     <form name = "contact" method = "get" action = "./SignUpPage">
     <div className="row">
        <div className ="column colleft">
            <h5>Reviews</h5>
            <p>Jackie: "They were able to find me a great apartment at a great price"</p>
            <p>Brain: "They found me great roommates"</p>
            <p>Josh: "They got me a great apartment at a great price"</p>
        </div>
        <div className ="column colmiddle">
            <h5>Sign up for our Newsletter</h5>
            <p>Sign up today to hear about great new living opportunities</p>
            <input type = "email" />
            <input name="form" type="submit" value="Sign Up!"/>
        </div>
        <div className ="column colright">
            <h5>Contact us </h5>
           <p>Email: <a href="mailto:livingspaces.contact@gmail.com">livingspaces.contact@gmail.com</a></p>
           <p> Phone: 123 - 456 - 7890 </p>
        </div>
    </div>
</form>
</footer>
</div>
);
}

