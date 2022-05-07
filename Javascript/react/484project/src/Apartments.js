import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Site.css'
import {Helmet} from "react-helmet";

export default function Apartments(){
    const offCampus =(<iframe src={'https://www.apartmentguide.com/apartments/Maryland/Towson/'} title={'Apartments Site'} id={'site'} />);
    const onCampus =(<iframe src={'https://www.towson.edu/studentlife/housing/campus/?utm_source=redirect&utm_content=housing'} title={'Apartments Site'} id={'site'} />);
    const [isOnCampus, setOnCampus] = useState(false);
        return(
            <div className={'ApartmentsWebsite'}>
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
                        <li> <Link to={""} onClick={() =>{setOnCampus(!isOnCampus)}}> Available Apartments </Link></li>
                    </ul>
                </div>
                {isOnCampus? offCampus : onCampus}
                </body>
            </div>
        );
}
