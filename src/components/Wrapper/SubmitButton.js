import React from "react";
import './SubmitButton.css'

function SubmitButton(props) {
    return (
        <button type='submit' className={`${props.className} btn btn-`}>{props.text}</button>
    );
}
export default SubmitButton