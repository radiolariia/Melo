import React from "react";
import './AccountLogin.css'
import Modal from './Modal'
import CrossIcon from "./Icon/CrossIcon/CrossIcon";
import FormLogin from "./FormLogin";

class AccountLogin extends React.Component{
    render() {
        return (
            <Modal
                textAlign={'center'}
                toggle={this.props.toggle}
                components={
                    <div className='account-login'>
                        <CrossIcon onClick={() => this.props.toggle(false)}/>
                        <FormLogin/>
                    </div>
                }
            />

        );
    }

}
export default AccountLogin