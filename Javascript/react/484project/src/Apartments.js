import React from 'react';
import './Site.css'
import {Helmet} from "react-helmet";

export default function Apartments(){
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
                        <li> <a href= './Apartments'>Available Apartments</a></li>
                    </ul>
                </div>
                     <iframe src={'https://www.apartmentguide.com/apartments/Maryland/Towson/'} title={'Apartments Site'} id={'site'} />
                </body>
            </div>
        );
}
