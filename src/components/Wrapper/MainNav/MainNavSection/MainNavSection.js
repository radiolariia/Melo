import React from "react"
import './MainNavSection.css'
import {Link} from "react-router-dom";

class MainNavSection extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }
    render() {
        const {title, svg} = this.props;
        return (
        <li className={`main-nav__sectionElem ${title.toLowerCase()}`}>
            <Link to={"/catalog/" + title.toLowerCase()} className='main-nav__sectionElem__link' >
                {svg()}
                {title}
            </Link>
        </li>
        );
    }
}
export default MainNavSection