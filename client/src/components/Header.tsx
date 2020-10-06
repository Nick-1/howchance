import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

const Header = () => {
    const auth = useContext(AuthContext)
    const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        auth.logout()
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