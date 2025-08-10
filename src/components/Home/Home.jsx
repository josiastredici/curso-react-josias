import React from "react";
import { Carousel } from "react-bootstrap";
import destinyImg from "./assets/Destiny-1-ps4.jpg";
import gtaImg from "./assets/gta-san-andreas-ps2.jpeg";

const images = [
    {
        alt: "Destiny 1 Ps4",
        src: destinyImg
    },
    {
        alt: "Gta San Andreas Ps2",
        src: gtaImg
    }
];

function Home(){
    return(
        <Carousel        
        autoPlay={true}        
        className="carousel-container">
        {images.map(image => (
            <Carousel.Item key={image.alt}>
                <img 
                    src={image.src}
                    alt={image.alt}
                />
            </Carousel.Item>
        ))}    
        </Carousel>
    );
}

export default Home;