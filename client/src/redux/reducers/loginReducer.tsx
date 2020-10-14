import {ILoginReducer} from "../../types";
import {CHANGE_THEME, LOGIN_USER, LOGOUT_USER} from "../actions/types/login.type";


const initialState: ILoginReducer = {
    currentUser: {
        email: null,
        userId: null,
        lang: null,
        theme: null
    }
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, currentUser: action.payload}
        case LOGOUT_USER:
            return {...state, currentUser: {}}
        case CHANGE_THEME:
            return {...state, currentUser: {...state.currentUser, theme: action.payload}}
        default:
            return state;
    }
}
export default loginReducer