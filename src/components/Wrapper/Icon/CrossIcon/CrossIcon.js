import React from "react";
import './CrossIcon.css'
import {crossIcon} from '../iconFunctions.js'

function CrossIcon() {
    return (
        <div className='cross'>{crossIcon()}</div>
    );
}
export default CrossIcon