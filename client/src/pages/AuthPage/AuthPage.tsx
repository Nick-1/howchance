import React, {useEffect, useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import loginService from "../../services/loginService";
import registrationService from "../../services/registrationService";
import {useDispatch} from "react-redux";
import {loginAction} from "../../actions/login.actions";
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
        try {
            const data = await loginService(form.email, form.password)
            dispatch( loginAction(data.user) )
            if(data && data.user) history.push('/')
        } catch (e) {
        }
    }

    const registerHandler = async () => {
        try {
            const data = await registrationService(form.email, form.password)
            console.log(data)
            message(data.message)
            await loginHandler()
        } catch (e) {
        }
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
                                    placeholder="Email"
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
                                    placeholder="Password"
                                    id="password"
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    onChange={changeHandler}
                                    disabled={loading}
                                />

                                <label htmlFor="email">Email</label>
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