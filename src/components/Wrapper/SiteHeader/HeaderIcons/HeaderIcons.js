import React from "react";
import './HeaderIcons.css'
import {headerIcons} from '../../Icon/iconFunctions.js';
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";

function HeaderIcons(props) {
    return (
        <div className="icons">
            <div
                className={'account-icon'}
                onClick={() => props.toggleAccountLogin(!props.accountLoginIsOpen)}
            >
                <Icon {...headerIcons[0]} key={0}/>
            </div>
            <div
                className={'basket-icon'}
                onClick={() => props.toggleBasket(!props.basketIsOpen)}
                >
                <Icon {...headerIcons[1]} key={1}/>
            </div>
            <div
                className={'search-icon'}
                // onClick={() => props.toggleBasket(!props.basketIsOpen)}
            >
                <Link to='/search'>
                    <Icon {...headerIcons[2]} key={2}/>
                </Link>
            </div>
        </div>
    );
}

export default HeaderIcons