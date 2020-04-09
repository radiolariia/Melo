import React from "react"
import './FooterSubscribe.css'
import FormLogin from '../../FormLogin'
import SubmitButton from '../../SubmitButton'

class FooterSubscribe extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }

    render() {
        return (
            <div className='footer__subscribe'>

                <form>
                    <span>Увійти в акаунт</span>
                    <FormLogin/>
                </form>
            </div>
        );
    }
}
export default FooterSubscribe