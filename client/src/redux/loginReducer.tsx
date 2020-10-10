import {ILoginReducer} from "../types";
import {LOGIN_USER, LOGOUT_USER} from "../actions/types/login.type";


const initialState: ILoginReducer = {
    currentUser: {
        email: null,
        userId: null
    }
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, currentUser: action.payload}
        case LOGOUT_USER:
            return {...state, currentUser: {}}
        default:
            return state;
    }
}
export default loginReducer