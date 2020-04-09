import React from "react"
import './MainNavLinks.css'
import MenuLink from "../MenuLink/MenuLink";
import {mainNavLinksData} from '../../../data/mainNavLinksData.js';

class MainNavLinks extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <div className="main-nav__links">
                {mainNavLinksData.map((item, index) => {
                    return <MenuLink {...mainNavLinksData[index]} key={index}/>
                })}
            </div>
        );
    }
}
export default MainNavLinks