import React from 'react'
var $ = require("jquery");
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from 'next/image'
import gallery_sm_1 from "../../../../assets/gallery_sm_1.png"
import gallery_sm_2 from "../../../../assets/gallery_sm_2.png"
import gallery_sm_3 from "../../../../assets/gallery_sm_3.png"
import gallery_sm_4 from "../../../../assets/gallery_sm_4.png"
import gallery_sm_5 from "../../../../assets/gallery_sm_5.png"
import gallery_sm_6 from "../../../../assets/gallery_sm_6.png"
import gallery_sm_7 from "../../../../assets/gallery_sm_7.png"
import gallery_sm_8 from "../../../../assets/gallery_sm_8.png"
import gallery_sm_9 from "../../../../assets/gallery_sm_9.png"



const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const Gallery1 = () => {
    return (
        <div className='px-7'>
            <OwlCarousel
                className="pt-16 px-7"
                loop={true}
                items={7}
                responsiveRefreshRate={1}
                autoplay={true}
                autoplayTimeout={500}
                smartSpeed={1000}
                autoplayHoverPause={true}
                nav={false}
                dots={true}
                margin={10}
                // left to right

                responsive={{
                    0: {
                        items: 7,
                        loop: true,
                    },
                    600: {
                        items: 7,
                        loop: true,
                    },
                    1000: {
                        items: 7,
                        loop: true,
                    },
                    1200: {
                        items: 7,
                        loop: true,
                    },
                    1600: {
                        items: 7,
                        loop: true,
                    },
                    1800: {

                        items: 7,
                        loop: true,
                    },
                }}
            >
                <div className='item'>
                    <Image src={gallery_sm_1} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_2} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_3} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_4} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_5} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_6} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_8} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_9} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_2} alt="Picture of the author" />
                </div>
                <div className='item'>
                    <Image src={gallery_sm_3} alt="Picture of the author" />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Gallery1