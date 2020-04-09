import React from "react"
import Icon from '../Icon/Icon';
import {socialIcons} from "../Icon/iconFunctions";

class SocialNetworks extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <div className="social-networks">
                {socialIcons.map((item, index) => {
                    return <a href="#" className='social__link' key={index}><Icon svg={socialIcons[index]}/></a>
                })}
            </div>
        );
    }
}
export default SocialNetworks