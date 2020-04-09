import React from "react"
import './Carousel.css'
import CarouselElement from "../CarouselElement/CarouselElement.js";

import Category from "../../Category";

function Carousel(props) {
    return (
        <div className="carousel">
            <Category text='Нове'/>
            <div className="carousel__list">
                {props.itemData.map((item, index) => {
                    return <CarouselElement
                        item={item}
                        key={index}/>
                })}
            </div>
        </div>
    );
}

export default Carousel