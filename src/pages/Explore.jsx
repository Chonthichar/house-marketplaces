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
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286313110_5466311866766326_3813590309502438832_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ML1y6Ns1x5IAX80K67G&tn=IcFkUDcwWIuuHVHs&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT91MCAZOh-FnT-nhYbS_X4T7hiXDU1PCNTh1SwjNrVohw&oe=62A320C6',
        caption: <h1 className=''>HuaHin DreamHome PoolVilla
            <br/> +66 (0) 63-869-7817
            </h1>

    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286306296_5466311770099669_4302134959182240249_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=p64OwydWRMUAX8Arcmc&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT_DdL6rg0e8aaVzKakc-Kd-A7P6JpMGVHa0sADhamCHIg&oe=62A33ABB',
        caption: <p className="">Sell & Rent
        <br/>Land - House - Condo</p>
    },
    {
        url: 'https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/286295249_5466311760099670_8435803177546229097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=AkuI9s01-2gAX_uceC8&_nc_ht=scontent.fsvg1-1.fna&oh=00_AT9nfjys1OkpKzneaPUpsbnNkTKWbTSt34W_wp1FDhgrJQ&oe=62A4B069',
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
                                  <Link to={    Contact} className='bg-yellow-600  text-xs text-center mt-2
                             text-white mr-auto ml-auto w-full pb-2 pt-2 pr-4 pl-4 opacity-200
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
            {/*<Contact/>*/}

        </>

    )
}
export default Slideshow