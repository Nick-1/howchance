import React from "react";
import logOutService from "../services/logOutService";
import {useDispatch} from "react-redux";
import {logOutAction} from "../actions/login.actions";
import {useHistory} from "react-router-dom"

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        logOutService()
        dispatch(logOutAction())
        history.push('/auth')
    }

    return (
        <nav>
            <div className="nav-wrapper blue">
                <span className="brand-logo ml-10">How Chance!</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <button className='btn blue waves-effect lighten-1 mr-10'>Theme: Day</button>
                    </li>
                    <li>
                        <button className='btn blue waves-effect lighten-1 mr-10'>Lang: Eng</button>
                    </li>
                    <li className='chance-list-item'>
                        <button type='button' className='button-link' onClick={logOutHandler}>Log out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header