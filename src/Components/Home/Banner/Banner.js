import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/man1.png';
import banner2 from '../../../images/banner/man2.png';
import banner3 from '../../../images/banner/man3.png';
import banner4 from '../../../images/banner/man4.png';





const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>cardiovascular </h3>
                    <p>Aerobic exercise is physical exercise .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>strength training</h3>
                    <p>Strength training or resistance training involves the performance .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>stretching</h3>
                    <p>
                        Stretching keeps the muscles flexible, strong, and healthy.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>body building</h3>
                    <p>
                        Bodybuilding is the use of progressive resistance exercise .
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;