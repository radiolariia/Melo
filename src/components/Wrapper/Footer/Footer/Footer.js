import React from "react"
import './Footer.css'
import SocialNetworks from "../../SocialNetworks/SocialNetworks";
import FooterSubscribe from "../FooterSubscribe/FooterSubscribe";
import FooterMobileCatalog from '../FooterMobileCatalog/FooterMobileCatalog'

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <footer className='footer'>
                {/*<FooterMobileCatalog/>*/}
                <FooterSubscribe/>
                <SocialNetworks/>
            </footer>
        );
    }
}
export default Footer
