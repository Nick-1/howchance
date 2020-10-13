import React, {useEffect, useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import loginService from "../../services/auth/loginService";
import registrationService from "../../services/auth/registrationService";
import {useDispatch} from "react-redux";
import {loginAction} from "../../redux/actions/login.actions";
import {useHistory} from "react-router-dom"

//import style from "./Auth.module.scss"

export const AuthPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const message = useMessage()
    const {loading, error, clearError} = useHttp()
    const [form, setFrom] = useState({email: '', password: ''})

    useEffect(() => {
        message(error)
        clearError()
    }, [message, error, clearError])

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async () => {
        if (checkEmail(form.email) && checkPassword(form.password)) {
            try {
                const data = await loginService(form.email, form.password)
                dispatch(loginAction(data.user))
                if (data && data.user) history.push('/')
            } catch (e) {
            }
        }
    }

    const registerHandler = async () => {
        if (checkEmail(form.email) && checkPassword(form.password)) {
            try {
                const data = await registrationService(form.email, form.password)
                message(data.message)
                await loginHandler()
            } catch (e) {
            }
        }
    }

    function checkEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        const notValid = !re.test(email)
        if (notValid) message('Use correct email please')
        return re.test(email);
    }

    function checkPassword(password: string) {
        const re = /^[0-9a-zA-Z]{8,}$/
        const notValid = !re.test(password)
        if (notValid) message('Password should contain at leas 8 characters')
        return re.test(password);
    }

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1 className='center'>How chance</h1>
                <div className="card blue">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id='email'
                                    type='text'
                                    name='email'
                                    value={form.email}
                                    onChange={changeHandler}
                                    disabled={loading}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    onChange={changeHandler}
                                    disabled={loading}
                                />

                                <label htmlFor="email">Password</label>
                            </div>
                        </div>
                        <div className='card-action'>
                            <button
                                className='btn waves-effect grey darken-4 mr-10'
                                onClick={loginHandler}
                            >Enter
                            </button>
                            <button
                                className='btn waves-effect  green'
                                onClick={registerHandler}
                                disabled={loading}
                            >Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}