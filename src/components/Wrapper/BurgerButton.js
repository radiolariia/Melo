import React from "react";
import './BurgerButton.css'

function BurgerButton() {
    return (
        <div
            className="burger"
            // onClick={}
        >
            <div className="burger__top"></div>
            <div className="burger__center"></div>
            <div className="burger__bottom"></div>
        </div>
    );
}
export default BurgerButton