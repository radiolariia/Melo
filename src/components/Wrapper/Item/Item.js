import React from "react"

import './Item.css'
import Image from '../Image/Image.js'
import AddToBasketButton from "../AddToBasketButton";

class Item extends React.Component {
    constructor() {
        super();
    }

    addToBasket = product => {
        const shoppingBasketItems = JSON.parse(localStorage.getItem('shopping-basket') || '[]');

        const basketItem = {
            id: product.id,
            imageSrc: product.imagePath,
            title: product.itemTitle,
            artist: product.itemArtist,
            price: product.itemPrice,
            quantity: 1,
        };

        let isExist = false;
        shoppingBasketItems.map((item, index) => {
            if (shoppingBasketItems[index].id === basketItem.id) {
                shoppingBasketItems[index].quantity++;
                localStorage.setItem('shopping-basket', JSON.stringify(shoppingBasketItems));
                return false;
            }
            if (isExist === false) {
                shoppingBasketItems.push(basketItem);
                localStorage.setItem('shopping-basket', JSON.stringify(shoppingBasketItems));
            }
        });
    }
    render() {
            return (
            <div className='item'>
                {this.props.item &&
                <Image src={this.props.item.imagePath}
                       alt={this.props.item.itemTitle}/>}
                {this.props.item &&
                <a href="/catalog/#" className="item__title">{this.props.item.itemTitle}</a>}
                {this.props.item &&
                <a href="/catalog/#" className="item__artist">{this.props.item.itemArtist}</a>}
                {this.props.item &&
                <span className="item__price">{this.props.item.itemPrice}</span>}

                <AddToBasketButton
                    text='Купити'
                    onClick={() => this.addToBasket(this.props.item)}/>
            </div>);
    }
}

export default Item