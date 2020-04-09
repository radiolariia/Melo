import React from "react"
import './BasketCarousel.css'
import Item from "../../Item/Item";
import {itemData} from "../../../data/itemData";

function BasketCarousel() {
    return (
        <div className="basket-carousel">
            {itemData.map((item, index) => {
            return <Item  item={item} key={index}/>
        })}
        </div>
    );
}
export default BasketCarousel