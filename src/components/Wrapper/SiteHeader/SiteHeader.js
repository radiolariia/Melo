import React from "react"
import classnames from "classnames";
import './SiteHeader.css'
import MainNavLinks from "../MainNav/MainNavLinks/MainNavLinks";
import Icon from '../Icon/Icon'
import HeaderIcons from './HeaderIcons/HeaderIcons.js'


class SiteHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            prevScrollPos: window.pageYOffset,
            isVisible: true,
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const {prevScrollPos} = this.state;

        const currScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currScrollPos;
        this.setState({
            prevScrollPos: currScrollPos,
            isVisible
        })
    };

    render() {
        return (
            <header className={classnames("site__header",
                {'site__header_hidden': !this.state.isVisible
            })}>
                <MainNavLinks/>
                <HeaderIcons
                    toggleBasket={this.props.toggleBasket}
                    toggleAccountLogin={this.props.toggleAccountLogin}
                />
            </header>
        );
    }
}
export default SiteHeader