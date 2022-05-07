import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Site.css'
import {Helmet} from "react-helmet";
import logo from "./images/keys.png";


export default function Apartments(){
    const offCampus =(<iframe src={'https://www.apartmentguide.com/apartments/Maryland/Towson/'}
                              title={'Apartments Site'} id={'site'} sandbox={'allow-same-origin allow-scripts allow-forms'}/>);
    const onCampus =(<iframe src={'https://www.towson.edu/studentlife/housing/campus/?utm_source=redirect&utm_content=housing'} title={'Apartments Site'} id={'site'} />);
    const [isOnCampus, setOnCampus] = useState(false);
        return(
            <div className={'ApartmentsWebsite'}>
                <Helmet>
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
                        <li> <a href={'./Apartments'}> Available Apartments </a></li>
                        <li><Link to={""} onClick={() =>{setOnCampus(!isOnCampus)}}><img src={logo} id='logo' alt='keys_logo' className ="image1"/></Link></li>
                        <li><h4>&lt;&lt;--Click Me!</h4></li>
                    </ul>
                </div>
                <div className={"Sites"}>
                {isOnCampus? offCampus : onCampus}
                </div>
                </body>
            </div>
        );
}
