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
        url: 'https://scontent.fosl4-2.fna.fbcdn.net/v/t39.30808-6/285861541_5466311896766323_2503748729812327999_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=oBl3lT8gvrkAX9eALYi&_nc_ht=scontent.fosl4-2.fna&oh=00_AT8ymoPTOb-Sey-u5tIFO4Op2q426mo7kg9sTDxd0hT6mA&oe=62A1AEC6',
        caption: <p className=''>
            HuaHin DreamHome <br/> PoolVilla
        </p>

    },
    {
        url: 'https://scontent.fosl4-2.fna.fbcdn.net/v/t39.30808-6/286199545_5466311976766315_6313532079394731312_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=IsxZExvfPxAAX_12bmC&_nc_ht=scontent.fosl4-2.fna&oh=00_AT-hKRVvODRDU2p01BbrP1CS_UscbCDHhCGnWRur1mhuNg&oe=62A09F52',
        // caption: <p className="">Eat healthy, Stay Healthy.</p>,

    },
    {
        url: 'https://scontent.fosl4-2.fna.fbcdn.net/v/t39.30808-6/286302279_5466312050099641_626295631910343258_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6V29-YUQB10AX_NmhF9&_nc_ht=scontent.fosl4-2.fna&oh=00_AT-ZOTnXbmgDjO_D5xvIBXJPbX6HP77qtoxmtRpa917aSg&oe=62A0D311',
        caption: <h2 className="be-prepare">"Sell - Rent
            <br/> Houses - Condos - Land</h2>
    },
    // {
    //     url: 'https://scontent.fosl4-2.fna.fbcdn.net/v/t39.30808-6/286302279_5466312050099641_626295631910343258_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6V29-YUQB10AX_NmhF9&_nc_ht=scontent.fosl4-2.fna&oh=00_AT-ZOTnXbmgDjO_D5xvIBXJPbX6HP77qtoxmtRpa917aSg&oe=62A0D311',
    // },
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