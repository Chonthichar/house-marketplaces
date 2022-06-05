import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Content from "../components/Content";
// import Features from "../components/Features"
import Example from "../components/Features";
import Examples from "../components/Image"
import QuickView from "../components/Quickview"
import {Button} from "@material-tailwind/react";
import PhotoFeatures from "../components/Phofeature"
// import {HashLink} from "react-router-hash-link";
// import Photo1 from "../assets/advertise.jpg"
import Photo1 from "../assets/house-1.jpg"
import Contact from "../components/Contact";

const slideImages = [
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/240227290_610021287051111_6758305064036924612_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=d7A4h4p62_gAX9iqVvA&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT-HcOlIGML3PVecylbKQgvMgkyfw7yo-0gxzQhQs1Z8wg&oe=629F67EE',
        caption: <p className=''>
            HuaHin DreamHome <br/> PoolVilla
        </p>

    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/241365277_645127333540506_6846923631458127254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=G6DhyYNpnHMAX98tjsX&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT80_G5XtLFRjTpg8im2qJkxe7-svfaHnAj5pmVtH21RDQ&oe=629DB9D9',
        // caption: <p className="">Eat healthy, Stay Healthy.</p>,

    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/241238765_619616146091625_2337374229408274435_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=tg1Tj8I5hl0AX9fVlJI&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_Pyr6uHkx88PKJum3O0sSsZIrBQi9TgsKmxumC-C8IGw&oe=629F032C',
        caption: <h2 className="be-prepare">"Sell - Rent
            <br/> Houses - Condos - Land</h2>
    },
];

function Features() {
    return null;
}

const Slideshow = () => {
    return (
        <>
            <html className="scroll-smooth">

            <div className="slide-container text-center justify-center ">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide mix-blend-overlay bg-neutral-600" key={index}>
                            <div className=' mix-blend-overlay bg-neutral-600' style={{
                                backgroundImage: `url(${slideImage.url})`,
                                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                // position: 'absolute',
                                height: "600px",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                // opacity: '20px'
                            }}>

                                <div className=" absolute w-full text-center text-white pt-12 pb-0">
                                    <p> Awesome Location - Great Price</p>
                                </div>

                                <div
                                    className=' absolute w-full pt-20 pb-0  text-white text-2xl text-center font-bold'>
                                    {slideImage.caption}</div>



                                <button type="button"
                                        className=" button text-white bg-gradient-to-r
                                        from-yellow-600 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br
                                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                                        shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium
                                        rounded-lg text-sm mt-40 px-5 py-2.5 text-center mr-2 mb-2 ">Contact
                                </button>

                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
            <PhotoFeatures/>
            <Example/>
            <Content/>
            <Examples/>
            <QuickView/>
            {/*<Contact/>*/}
            </html>
        </>

    )
}
export default Slideshow