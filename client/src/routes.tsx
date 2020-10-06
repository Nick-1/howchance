import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";

export const useRoutes = (isAuthenticated: boolean) => {
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