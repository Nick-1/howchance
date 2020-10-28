import {createStore, combineReducers} from "redux"
import topicReducer from "./reducers/topicReducer";
import {RootState} from "../types";
import loginReducer from "./reducers/loginReducer";
import itemReducer from "./reducers/itemReducer";

let reducers = combineReducers<RootState>(
    {
        topics: topicReducer,
        items: itemReducer,
        login: loginReducer,
    }
)

let store = createStore(reducers,  (window as any)?.__REDUX_DEVTOOLS_EXTENSION__?.())

export default store
