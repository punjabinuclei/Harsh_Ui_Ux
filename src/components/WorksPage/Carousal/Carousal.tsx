import React from 'react';
import DepoImg from "../../../assets/Works/Depo.png";
import Image from 'next/image';

const Carousel = () => {
    return (
        <section>
            <div className="container">
                <div className="carousel">
                    <input type="radio" name="slides" id="slide-1" />
                    <input type="radio" name="slides" id="slide-2" />
                    <input type="radio" name="slides" id="slide-3" />
                    <input type="radio" name="slides" id="slide-4" />
                    <input type="radio" name="slides" id="slide-5" />
                    <input type="radio" name="slides" id="slide-6" />
                    <ul className="carousel__slides">
                        <li className="carousel__slide">
                            <figure>
                                <div>
                                    <img src="https://picsum.photos/id/1041/800/450" alt="" />
                                </div>
                                <figcaption>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <span className="credit">Photo: Tim Marshall</span>
                                </figcaption>
                            </figure>
                        </li>
                        {/* Add other carousel slides here */}
                    </ul>
                    <ul className="carousel__thumbnails">
                        <li>
                            <label htmlFor="slide-1">
                                <img src="https://picsum.photos/id/1041/150/150" alt="" />
                            </label>
                            <label htmlFor="slide-2">
                                <img src="https://picsum.photos/id/1041/150/150" alt="" />
                            </label>
                            <label htmlFor="slide-3">
                                <img src="https://picsum.photos/id/1041/150/150" alt="" />
                            </label>
                            <label htmlFor="slide-4">
                                <img src="https://picsum.photos/id/1041/150/150" alt="" />
                            </label>
                        </li>
                        {/* Add other carousel thumbnails here */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
