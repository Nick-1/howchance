import {createContext} from "react";

function loopLogin(param1:any, param2:any) {
    console.log(param1, param2)
}
function loopLogout() {}


export const AuthContext = createContext({
    token: null,
    userId: null,
    login: loopLogin,
    logout: loopLogout,
    isAuthenticated: false
})