import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import store from "./redux/store";

export const useRoutes = () => {
    const isAuthenticated = store.getState().login.currentUser.userId
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <MainPage/>
                </Route>
                <Route path='/topic/:id' exact>
                    <MainPage/>
                </Route>
                <Redirect to='/home'/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/'>
                <AuthPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}
