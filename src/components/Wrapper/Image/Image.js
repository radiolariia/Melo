import React from "react"
import './Image.css'

function Image(props) {
    return (
        <a href="/catalog/#" className="item__photo">
            <img src={props.src} alt={props.alt} className='photo'></img>
        </a>
    );
}

export default Image