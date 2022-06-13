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
import {Link} from "react-router-dom";
import QuickViews from "../components/QuickViews"
import QuickViewA from "../components/QuickViewA"
import QuickViewB from "../components/QuickViewB"
import QuickViewC from "../components/QuickViewC"
import QuickViewD from "../components/QuickViewD"
import QuickViewE from "../components/QuickViewE"

const slideImages = [
      {
        url: 'https://i.ibb.co/2qH0YWM/cover2.jpg',
        caption:  <h1 className=''>HuaHin DreamHome PoolVilla
            <br/> +66 (0) 63-869-7817
            </h1>
    },
    {
        url: 'https://i.ibb.co/m9bFGpq/cover6.jpg',
        caption:
        <p className="">Sell & Rent
        <br/>Land - House - Condo</p>

    },
    {
        url: 'https://i.ibb.co/RcHjqy7/cover0.jpg',
        caption:<h1 className=''>HuaHin DreamHome PoolVilla
            <br/> +66 (0) 63-869-7817
            </h1>
    },
];

function QuickView2() {
    return null;
}

const Slideshow = () => {
    return (
        <>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="mt-0 top-0" key={index}>
                            <div className=' bg-cover bg-no-repeat bg-center mix-blend-overlay bg-neutral-600'
                                 style={{
                                     'backgroundImage': `url(${slideImage.url}), linear-gradient(to right, rgba(50, 70, 80, 0.7), rgba(30, 20, 150, 0.7)) `,
                                     height: '500px',
                                     backgroundSize: 'cover',
                                     backgroundPosition: 'center',
                                     // opacity: 'linear-gradient(to right, rgba(50, 70, 80, 0.7), rgba(30, 20, 150, 0.7)'
                                     // color: 'dimgray',
                                 }}>

                                  <div
                                    className='text-white pt-40 text-center text-2xl bg-stone-800 h-100 z-40 font-bold '
                                    style={{
                                        opacity: '0.7',
                                        marginTop: 'auto',
                                        marginBottom: 'auto'
                                    }}>{slideImage.caption}
                                  <Link to='/contact' className='bg-yellow-600  text-xs text-center mt-2
                             text-white mr-auto ml-auto w-full pb-2 pt-2 pr-4 pl-4 opacity-2001
                            ' style={{opacity: 'none'}}> Contact</Link>
                                </div>
                            </div>

                        </div>

                    ))}
                </Slide>
            </div>


            {/*<PhotoFeatures/>*/}
            <Example/>

            {/*<Examples/>*/}
            <QuickView/>
            <QuickViews/>
            <QuickViewA/>
            <QuickViewB/>
            <QuickViewC/>
            <QuickViewD/>
            <QuickViewE/>
            {/*<QuickView2/>*/}
            <Content/>

            <Contact/>

        </>

    )
}
export default Slideshow