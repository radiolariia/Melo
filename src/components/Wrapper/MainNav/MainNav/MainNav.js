import React from "react"
import './MainNav.css'
import MainNavSection from '../MainNavSection/MainNavSection.js';
import MainNavLinks from "../MainNavLinks/MainNavLinks.js";
import {sectionsIcons} from "../../Icon/iconFunctions";

class MainNav extends React.PureComponent {
    render() {
        return (
            <div className='main-nav'>
                <ul className="main-nav__sections">
                    {sectionsIcons.map( (item, index) => {
                        return <MainNavSection {...sectionsIcons[index]} key={index}/>
                    })}
                </ul>

                {/*<MainNavLinks />*/}
                {/*<MobileSocialLinks />*/}
            </div>
        );
    }
}
export default MainNav