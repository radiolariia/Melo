import React from "react";
import './FormLogin.css'
import SubmitButton from "./SubmitButton";

function FormLogin() {
    return (
        <form className='form'>
            <span className='form__span'>Увійти в акаунт</span>
            <div className='form-login'>
                <input className='form-login__input' aria-label="Вхід в акаунт" type="email" placeholder="Email" required/>
                <input className='form-login__input' aria-label="Пароль" type="email" placeholder="Пароль" required/>
                <p className='form__p'>Забув пароль</p>
                <div className='form-login__buttons'>
                    <SubmitButton text='Log in'/>
                    <SubmitButton text='ВХІД'/>
                </div>
            </div>
        </form>
    );
}
export default FormLogin