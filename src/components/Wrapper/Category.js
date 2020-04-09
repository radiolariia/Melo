import React from "react";
import './Category.css'
import {Link} from "react-router-dom";

function Category(props) {
    return (
        <Link className="category" to="/catalog"><span>{props.text}</span></Link>
    );
}
export default Category