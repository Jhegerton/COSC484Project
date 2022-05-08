import React from 'react';
import {Slide} from 'react-slideshow-image';
import './Site.css';


const slidePictures = [
    {
        url: './images/Altus.jpg',
        caption: 'Altus Apartments'
    },
    {
        url: './images/HamptonPlaza.jpg',
        caption: 'Hampton Plaza'
    },
    {
        url: './images/TheSoutherly.jpg',
        caption: 'The Southerly'
    },
    {
        url: './images/TowsonRow.jpg',
        caption: 'Towson Row'
    },
    {
        url: './images/Promenade.jpg',
        caption: "Towson Promenade"
    },
];

const Slideshow = () => {
        return (
            <div className="slide-container">
                <Slide>
                    {slidePictures.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        );
}

export {Slideshow};