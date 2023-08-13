import React from 'react';
import Image from 'next/image';
import styles from './Carousal.module.css'; // Import the CSS styles
import img1 from "../../../../../assets/Carousals/Carousal2/img1.svg";
import img2 from "../../../../../assets/Carousals/Carousal2/img2.svg";
import img4 from "../../../../../assets/Carousals/Carousal2/img4.svg";
import img5 from "../../../../../assets/Carousals/Carousal2/img5.svg";
import img6 from "../../../../../assets/Carousals/Carousal2/img6.svg";
import img7 from "../../../../../assets/Carousals/Carousal2/img7.svg";
import img8 from "../../../../../assets/Carousals/Carousal2/img8.svg";
import img9 from "../../../../../assets/Carousals/Carousal2/img9.svg";
import img10 from "../../../../../assets/Carousals/Carousal2/img10.svg";
import img11 from "../../../../../assets/Carousals/Carousal2/img11.svg";
import img12 from "../../../../../assets/Carousals/Carousal2/img12.svg";
import img13 from "../../../../../assets/Carousals/Carousal2/img13.svg";
import img14 from "../../../../../assets/Carousals/Carousal2/img14.svg";



interface Slide {
    id: number;
    src: string;
    alt: string;
}

const slides: Slide[] = [
    { id: 1, src: img1, alt: '' },
    { id: 2, src: img2, alt: '' },
    { id: 3, src: img4, alt: '' },
    { id: 4, src: img5, alt: '' },
    { id: 5, src: img6, alt: '' },
    { id: 6, src: img7, alt: '' },
    { id: 7, src: img8, alt: '' },
    { id: 8, src: img9, alt: '' },
    { id: 9, src: img10, alt: '' },
    { id: 10, src: img11, alt: '' },
    { id: 11, src: img12, alt: '' },
    { id: 12, src: img13, alt: '' },
    { id: 13, src: img14, alt: '' },
    { id: 1, src: img1, alt: '' },
    { id: 2, src: img2, alt: '' },
    { id: 3, src: img4, alt: '' },
    { id: 4, src: img5, alt: '' },
    { id: 5, src: img6, alt: '' },
    { id: 6, src: img7, alt: '' },
    { id: 7, src: img8, alt: '' },
    { id: 8, src: img9, alt: '' },
    { id: 9, src: img10, alt: '' },
    { id: 10, src: img11, alt: '' },
    { id: 11, src: img12, alt: '' },
    { id: 12, src: img13, alt: '' },
    { id: 13, src: img14, alt: '' },
    
    // Add more slide data
];

const Carousel: React.FC = () => {
    return (
        
        <div className={styles.slider}>
            <div className={styles.slideTrack}>
                {slides.map((slide) => (
                    <div className={styles.slide} key={slide.id}>
                        <Image  src={slide.src} alt={slide.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
