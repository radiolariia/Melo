import React from "react"
import './Icon.css'

function Icon(props) {
		return (
			<div className="icon">
				{props.svg()}
			</div>
		);
	}

export default Icon