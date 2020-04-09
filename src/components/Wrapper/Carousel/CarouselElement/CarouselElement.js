import React from "react"
import './CarouselElement.css'
import Item from '../../Item/Item.js'


class CarouselElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.item.id,
		}
	}
	render() {
		return (
			<div className="carousel__element">
				<Item item={this.props.item}/>
			</div>
		);
	}
}

export default CarouselElement