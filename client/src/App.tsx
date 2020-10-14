import React, {useEffect} from "react";
import "materialize-css"
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
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

    const {ready} = useAuth()

    if (!ready) return <Loader/>

    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
