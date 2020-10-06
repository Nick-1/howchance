import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
//import style from "./Auth.module.scss"

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
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
            const data = await request('api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/auth/register', 'POST', {...form})
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