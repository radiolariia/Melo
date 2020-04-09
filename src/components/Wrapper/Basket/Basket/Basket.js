import React from "react";
import './Basket.css'
import Modal from '../../Modal.js'
import BasketCarousel from "../BasketCarousel/BasketCarousel";
import BasketItem from "../BasketItem/BasketItem";
import SubmitButton from "../../SubmitButton";
import CrossIcon from "../../Icon/CrossIcon/CrossIcon";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basketItems: [],
        }
    }
    componentDidMount() {
        this.setState({
            basketItems: JSON.parse(localStorage.getItem('shopping-basket') || '[]'),
        })
    }

    deleteItem = item => {
        let items = this.state.basketItems;
        const updateItems = items.filter(product => product.id !== item.id);
        this.setState({
            basketItems: updateItems
        });
        console.log('delete', this.state.items);
        localStorage.setItem('shopping-basket', JSON.stringify(this.state.basketItems));
        return false;
    };


    render() {
        return (
            <Modal
                textAlign={'right'}
                toggle={this.props.toggleBasket}
                components={
                    <div className='basket'>
                        <CrossIcon onClick={() => this.props.toggleBasket(false)}/>
                        <div className='basket-container'>
                        <div className='item-table'>
                        {this.state.basketItems.map(item => {
                            return (
                                <BasketItem data={item}
                                            deleteItem={this.deleteItem}
                                            key={item.id}
                                />);
                        })}
                        </div>
                        <div className='total-table'>
                        {/*<div>{math.sum(...)}</div>*/}
                        </div>
                        <SubmitButton text='Оформити'/>

                        </div>
                        <div style={{textAlign: 'center'}}><a className='category' >Рекомендації</a></div>
                        <BasketCarousel/>
                    </div>
                }
            />
        );}
}
export default Basket