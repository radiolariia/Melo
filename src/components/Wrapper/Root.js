import React from 'react';
import {connect} from 'react-redux';
import {toggleBasket} from "../../Redux/actionCreators";
import {toggleAccountLogin} from "../../Redux/actionCreators";
import AccountLogin from "./AccountLogin";
import Basket from "./Basket/Basket/Basket";
import SiteHeader from "./SiteHeader/SiteHeader";
import Footer from "./Footer/Footer/Footer";
import Search from "./Search";
import Main from "./Main";
import MainNav from "./MainNav/MainNav/MainNav";
import {withRouter} from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        products: state.products,
        basketIsOpen: state.basketIsOpen,
        accountLoginIsOpen: state.accountLoginIsOpen,
    };
};
const mapDispatchToProps = (dispatch) => ({
    toggleBasket: (basketIsOpen) => dispatch(toggleBasket(basketIsOpen)),
    toggleAccountLogin: (accountLoginIsOpen) => dispatch(toggleAccountLogin(accountLoginIsOpen))
});

class Root extends React.Component {
    render() {
        console.log(this.props)
        const {accountLoginIsOpen, toggleAccountLogin, basketIsOpen, toggleBasket} = this.props;
        return (
            <React.Fragment>
                {accountLoginIsOpen ?  <AccountLogin toggle={toggleAccountLogin}/> : null}
                {basketIsOpen ?  <Basket toggleBasket={toggleBasket}/> : null}
                <SiteHeader
                    toggleBasket={this.props.toggleBasket}
                    toggleAccountLogin={this.props.toggleAccountLogin}
                />
                <Main products={this.props.products}/>
                {this.props.location.pathname === '/catalog' ||
                this.props.location.pathname === '/'? <MainNav/>: null}
                <Footer/>
            </React.Fragment>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))