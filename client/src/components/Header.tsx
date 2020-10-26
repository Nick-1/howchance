import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAction, loginAction, logOutAction} from "../redux/actions/login.actions";
import {useHistory} from "react-router-dom"
import {RootState} from "../types";
import authService from "../services/authService";

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const currentUser = useSelector((state: RootState) => state.login.currentUser)
    const theme: any = useSelector((state: RootState) => state.login.currentUser.theme)

    const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        authService.logOut()
        dispatch(logOutAction())
        history.push('/auth')
    }

    useEffect(() => {
        const elems = document.querySelectorAll('select')
        window.M.FormSelect.init(elems)
        token ? authService.getUser().then(user => dispatch(loginAction(user))) : history.push('/auth')
    }, [dispatch, history, token, currentUser.userId])


    const changeThemeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAction(e.target.value))
        authService.changeTheme(e.target.value, currentUser.userId)
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <span className="brand-logo ml-10">
                    <i className="material-icons left">sentiment_satisfied</i> How Chance!
                </span>

                {currentUser.userId &&
                <ul id="nav-mobile" className="right hide-on-med-and-down head-menu">
                    <li>
                        <span className='header-select'>
                            <select defaultValue={theme}
                                    className='header-select'
                                    onChange={changeThemeHandler}>
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                            </select>
                       </span>
                    </li>
                    <li>
                        <span className='header-select'>
                            <select defaultValue='en'>
                                <option value="en">Lang: EN</option>
                                <option value="ru">Язык: РУС</option>
                            </select>
                        </span>
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