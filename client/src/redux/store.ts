import {createStore, combineReducers} from "redux"
import topicReducer from "./topicReducer";
import {RootState} from "../types";
import loginReducer from "./loginReducer";
import itemReducer from "./itemReducer";

let reducers = combineReducers<RootState>(
    {
        topics: topicReducer,
        items: itemReducer,
        login: loginReducer,
    }
)


let store = createStore(reducers,  (window as any)?.__REDUX_DEVTOOLS_EXTENSION__())

export default store
