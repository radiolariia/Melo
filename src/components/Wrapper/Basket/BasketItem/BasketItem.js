import React from "react";
import './BasketItem.css'
import {minusButton, plusButton} from '../../Icon/iconFunctions'
import CrossIcon from "../../Icon/CrossIcon/CrossIcon";
import Image from "../../Image/Image";

class BasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            price: parseInt(this.props.data.itemPrice),
        }
        this.changeQuantity = this.changeQuantity.bind(this);
    }
    // componentWillUnmount() {
    //
    // }

    changeQuantity = arg => {
        return this.setState({
            quantity: this.state.quantity + arg,
        })
    }
    render() {
        const {data, deleteItem} = this.props;
        const quantity = this.state.quantity;
        const amountForItem = this.state.price * quantity;
        return (
            <div className='basket__item'>
                <div className='border'></div>
                <div className='basket__image'>
                    <Image src={data.imagePath} alt={data.itemTitle}/>
                </div>
                <div className='basket__info'>
                    <div className='basket__title'>
                        <div>
                            <a>{data.itemTitle}</a>
                            <a>{data.itemArtist}</a>
                        </div>
                        <span>{amountForItem + ' ₴'}</span>
                        <CrossIcon
                            onClick={() => this.props.deleteItem(data)}
                        />
                    </div>
                    <div className='basket__buttons'>
                        <div>
                            <button
                                onClick={quantity > 1 ? () => {this.changeQuantity(-1)} : null}
                            >{minusButton()}</button>
                            <span>{quantity}</span>
                            <button onClick={() => this.changeQuantity(1)}>{plusButton()}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BasketItem