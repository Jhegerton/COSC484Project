import React from 'react';
import {Slide} from 'react-slideshow-image';
import "./Site.css";


const slidePictures = [
    {
        url: 'https://www.bozzuto.com/wp-content/uploads/2019/02/1571_01_PNG.jpg',
        caption: 'Altus Apartments'
    },
    {
        url: 'https://hamptonplaza.com/storage/2018/06/5967774-R3-007-2-1024x691.jpg',
        caption: 'Hampton Plaza'
    },
    {
        url: 'https://images1.apartments.com/i2/bUqY3HJt0bI8B9G_1En43G65uRQAWKJ46m3pw5lEnmU/111/the-southerly-towson-md-salt-water-swimming-pool.jpg',
        caption: 'The Southerly'
    },
    {
        url: 'https://www.designcollective.com/files/projects/gallery/sqr_ne1.jpg',
        caption: 'Towson Row'
    },
    {
        url: 'https://www.udr.com/globalassets/communities/towson-promenade/images/aplus_desktop_1900x1267_towsonpromenade_2015_bdg1_el.jpg',
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