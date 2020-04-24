import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

import testStyles from './testimonials.module.scss'


function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    return (
    
    <Carousel className={testStyles.reviews} activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
        <h1>Allison H.</h1>
                <p>"I am on medication for both chronic pain and anxiety. I’ve noticed since I’ve been taking the gummies I haven’t had to take my pain or anxiety meds as much. They’ve been a huge relief and I absolutely recommend them and will be ordering them again!!"</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Kymberly O.</h1>
                <p>"Even though I ordered the regular gummy worms, I cannot complain, this came so quick and packaged wonderfully. I think there’s plenty in there and they are very relaxing with just taking two. I know I will be trying more products from you and recommend you as well. Thank you"</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Guest</h1>
                <p>"I use the gummies at night to help with sleep. These are by far the best ones I’ve found and the price through Groupon can’t be beat! Golden Goat is fabulous with the shipping and I don’t have any complaints! They are great!"</p>
        </Carousel.Item>
    </Carousel>
    
    );
}

export default Testimonials
