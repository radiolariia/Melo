import React from "react"
import './FooterMobileCatalog.css'

class MainNavLinks extends React.Component {
    render() {
        const {link} = this.props;

        return (
            <div className="footer__links">
                <div className="footer__links_left">
                    {/*<CatalogLink/>*/}
                    {/*<CatalogLink/>*/}
                    {/*<CatalogLink/>*/}
                </div>
                <div className="footer__links_right">
                    {/*<CatalogLink/>*/}
                    {/*<CatalogLink/>*/}
                    {/*<CatalogLink/>*/}
                </div>
            </div>
        );
    }
}
export default MainNavLinks