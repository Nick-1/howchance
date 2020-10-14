import React, {useEffect} from "react";
import "materialize-css"
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import Header from "./components/Header";
import {Loader} from "./components/Loader";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom"
import {MainPage} from "./pages/MainPage/MainPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import insertToken from "./interceptors";
import ItemModal from "./components/ItemModal/ItemModal";
import {RootState} from "./types";
import "./App.scss"

function App() {
    useEffect(() => {
        insertToken()
    }, [])

    const {ready} = useAuth()
    const theme: any = useSelector((state: RootState) => state.login.currentUser.theme)


    if (!ready) return <Loader/>

    return (
        <Router>
            <div className={`${theme} wrapper`}>
                <main>
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
                    <ItemModal/>
                </main>
                <footer className="page-footer">
                    <div className="footer-copyright">
                        <div className="container center">
                            © 2020 Copyright Text
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
