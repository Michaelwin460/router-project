import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider({pics}) {

    
  const picsArr = pics.map((pic, index) => (
    <div key={index} >
      <img loading="lazy" src={pic.thumbnailUrl} alt={`slide ${index}`} />
      <p>{pic.title}</p>
    </div>
  ))

    return ( 
      <Carousel>
        {picsArr}
      </Carousel>
      
    );
}

export default Slider

