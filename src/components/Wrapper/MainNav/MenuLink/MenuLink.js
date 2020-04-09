import React from "react"
import {Link} from 'react-router-dom'

class MenuLink extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <Link to={this.props.link}>{this.props.linkLabel}</Link>
        );
    }
}
export default MenuLink