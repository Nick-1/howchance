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
    const token = localStorage.getItem('token')
    const currentUser = useSelector((state: RootState) => state.login.currentUser)

    const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        logOutService()
        dispatch(logOutAction())
        history.push('/auth')
    }

    useEffect(() => {
        const elems = document.querySelectorAll('select')
        window.M.FormSelect.init(elems)
        token ? getUserService().then(user => dispatch(loginAction(user))) : history.push('/auth')
    }, [dispatch, history, token, currentUser.userId])



    return (
        <nav>
            <div className="nav-wrapper blue">
                <span className="brand-logo ml-10">
                    <i className="material-icons left">sentiment_satisfied</i> How Chance!
                </span>

                {currentUser.userId &&
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
                        <a href='#!' onClick={logOutHandler}>Log out</a>
                    </li>
                </ul>
                }


            </div>
        </nav>
    )

}

export default Header