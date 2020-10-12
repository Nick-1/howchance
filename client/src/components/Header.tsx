import React, {useEffect} from "react";
import logOutService from "../services/auth/logOutService";
import {useDispatch, useSelector} from "react-redux";
import {loginAction, logOutAction} from "../redux/actions/login.actions";
import {useHistory} from "react-router-dom"
import getUserService from "../services/auth/getUserService";
import {RootState} from "../types";

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector(((state: RootState) => state.login.currentUser))

    const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        logOutService()
        dispatch(logOutAction())
        history.push('/auth')
    }
    const init = () => {

    }

    useEffect(() => {
        const elems = document.querySelectorAll('select')
        window.M.FormSelect.init(elems)
        // if (currentUser && currentUser.userId) getUserService().then(user => dispatch(loginAction(user)))
    })

    return (
        <nav>
            <div className="nav-wrapper blue">
                <span className="brand-logo ml-10">How Chance!</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <select defaultValue='day'>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>
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