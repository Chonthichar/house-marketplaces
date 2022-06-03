import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Content from "../components/Content";
// import Features from "../components/Features"
import Example from "../components/Features";
import Examples from "../components/Image"

import PhotoFeatures from "../components/Phofeature"
// import {HashLink} from "react-router-hash-link";
// import Photo1 from "../assets/advertise.jpg"
import Photo1 from "../assets/house-1.jpg"
import Contact from "../components/Contact";

const slideImages = [
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240227290_610021287051111_6758305064036924612_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=d7A4h4p62_gAX9iqVvA&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-HcOlIGML3PVecylbKQgvMgkyfw7yo-0gxzQhQs1Z8wg&oe=629F67EE',
        caption: <p className=''>
            Discover
            <br/>Modren Villa</p>

    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/241365277_645127333540506_6846923631458127254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=G6DhyYNpnHMAX98tjsX&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT80_G5XtLFRjTpg8im2qJkxe7-svfaHnAj5pmVtH21RDQ&oe=629DB9D9',
        caption: <p className="">Eat healthy, Stay Healthy.</p>,

    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/241238765_619616146091625_2337374229408274435_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=tg1Tj8I5hl0AX9fVlJI&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_Pyr6uHkx88PKJum3O0sSsZIrBQi9TgsKmxumC-C8IGw&oe=629F032C',
        caption: <h2 className="be-prepare">"Get some more life's tips"</h2>
    },
];

function Features() {
    return null;
}

const Slideshow = () => {
    return (
        <>
            <html className="scroll-smooth">

            <div className="slide-container ">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide mix-blend-overlay bg-neutral-600 z-0" key={index}>
                            <div className=' mix-blend-overlay bg-neutral-600 z-0' style={{
                                'backgroundImage': `url(${slideImage.url})`,
                                height: "600px",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: '1',
                                // opacity: '20px'
                            }}>

                                    <div className="text-center text-white pt-16 pb-0">
                                        <p> Awesome Location - Great Price</p>
                                    </div>

                                <span
                                    className='w-100 text-white text-slide font-sans text-5xl text-center fw-bold my-8 bg-yellow-600 '>{slideImage.caption}</span>
                                <span>{slideImage.text}</span>

                                <div className="content-center z-30 ">
                                    <a
                                        href="#"
                                        className="w-44 px-8 py-3 p-8 z-30
                                        text-base font-medium
                                         text-white bg-amber-600 hover:bg-stone-500 md:py-4 md:text-lg md:px-10"
                                    >
                                        Learn More
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <PhotoFeatures/>
            <Example/>
            <Content/>
            <Examples/>
            <Contact/>
            </html>
        </>

    )
}
export default Slideshow