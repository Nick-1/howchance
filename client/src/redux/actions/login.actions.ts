import {currentUserType} from "../../types";
import {CHANGE_THEME, LOGIN_USER, LOGOUT_USER} from "./types/login.type";

export const loginAction = (currentUser: currentUserType) => ({ type: LOGIN_USER, payload: currentUser })
export const logOutAction = () => ({ type: LOGOUT_USER })
export const changeThemeAction = (themeValue: string) => ({ type: CHANGE_THEME, payload: themeValue })