import React, {useEffect} from "react";
import "materialize-css"
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import Header from "./components/Header";
import {Loader} from "./components/Loader";
import {Provider} from "react-redux";
import {Route} from "react-router-dom"
import store from "./redux/store";
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import insertToken from "./interceptors";
import ItemModal from "./components/ItemModal/ItemModal";


function App() {
    useEffect(() => {
        insertToken()
    }, [])

    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    if (!ready) return <Loader/>

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenticated
            }}>
                <Router>
                    <Header/>
                    <Route
                        render={() => <AuthPage/>}
                        path='/auth'
                        exact
                    >
                    </Route>
                    <Route
                        render={() => <MainPage/>}
                        path='/'
                        exact
                    >
                    </Route>
                    <Route
                        render={() => <MainPage/>}
                        path='/topic/:id'
                        exact
                    >
                    </Route>
                </Router>
                <ItemModal/>
            </AuthContext.Provider>
        </Provider>
    );
}

export default App;
