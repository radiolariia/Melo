import React from "react";
import './Search.css'
import Icon from "./Icon/Icon";
import {headerIcons, leftArrow} from "./Icon/iconFunctions";
import {Link} from 'react-router-dom'

class Search extends React.Component{
    render() {
        return (
            <div className='search'>
                <Link to='/'><Icon svg={leftArrow}/></Link>
                <div className='search__form__container'>
                    <form className='search__form'>
                        <label className='search__label'>
                            <input className='search__input' aria-label="Пошук" type="search"/>
                        </label>
                        <Icon {...headerIcons.filter(icon => icon.title === 'search')[0]}/>
                    </form>
                </div>
                {/*textAlign={'center'}*/}
                {/*toggle={this.props.toggle}*/}
                {/*components={*/}
                {/*    <div className='account-login'>*/}
                {/*        <CrossIcon onClick={() => this.props.toggle(false)}/>*/}
                {/*        <FormLogin/>*/}
                {/*    </div>*/}
                {/*}*/}
            </div>

        );
    }

}
export default Search