import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

import testStyles from './testimonials.module.scss'


function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
    
    <Carousel className={testStyles.reviews} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <h1>Allison H.</h1>
                <p>"This product has been a huge relief and I absolutely recommend!"</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Kymberly O.</h1>
                <p>"I know I will be trying more of this. Thank you"</p>
        </Carousel.Item>
        <Carousel.Item>
        <h1>Guest</h1>
                <p>"Golden Goat USA is fabulous with the shipping and I don’t have any complaints! They are great!"</p>
        </Carousel.Item>
    </Carousel>
    
    );
}

export default Testimonials
