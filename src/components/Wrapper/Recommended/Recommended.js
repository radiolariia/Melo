import React from "react"
import './Recommended.css'
import Item from '../Item/Item.js'
import {itemData} from '../../data/itemData.js';
import Category from "../Category";

function Recommended() {
    return (
        <section className="recommended">
            <div>
                <Category text='Рекомендації'/>
            </div>
            {itemData.map((item, index) => {
                return <Item item={itemData[index]} key={index}/>
            })}
        </section>
    );
}

export default Recommended