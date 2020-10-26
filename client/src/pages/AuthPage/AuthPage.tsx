import React, {useState} from 'react'
import {useMessage} from "../../hooks/message.hook";
import {useDispatch} from "react-redux";
import {loginAction} from "../../redux/actions/login.actions";
import {useHistory} from "react-router-dom"
import {isValid} from "../../hooks/validation.hook";
import authService from "../../services/authService";

export const AuthPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const message = useMessage()
    const [form, setFrom] = useState({email: '', password: ''})

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFrom({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async () => {
        if (isValid('email', form.email) && isValid('password', form.password)) {
            try {
                const data = await authService.login(form.email, form.password)
                dispatch(loginAction(data.user))
                if (data && data.user) history.push('/')
            } catch (e) {}
        }
    }

    const registerHandler = async () => {
        if (isValid('email', form.email) && isValid('password', form.password)) {
            try {
                const data = await authService.registration(form.email, form.password)
                message(data.message)
                await loginHandler()
            } catch (e) {}
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
                                    id='email'
                                    type='text'
                                    name='email'
                                    value={form.email}
                                    onChange={changeHandler}
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
                            >Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}