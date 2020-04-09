import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div
            style={{textAlign: `${props.textAlign}`}}
            className='modal modal_visible'
            onClick={() => props.toggle(false)
        }>
            {props.components}
        </div>
    );
}
export default Modal