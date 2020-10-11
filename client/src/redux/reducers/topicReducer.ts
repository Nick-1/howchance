import {ADD_TOPIC, GET_TOPICS, REMOVE_TOPIC, SET_CURRENT_TOPIC} from "../actions/types/topics.type";
import {ItopicReducer} from "../../types";


const initialState: ItopicReducer = {
    topicList: [],
    currentTopic: null
}

const topicReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TOPIC:
            return { ...state, topicList: [...state.topicList, action.payload.topic] }
        case REMOVE_TOPIC:
            return {...state, topicList: state.topicList.filter(topic => topic._id !== action.payload)}
        case GET_TOPICS:
            return {...state, topicList: action.payload}
        case SET_CURRENT_TOPIC:
            return {...state, currentTopic: action.payload}
        default:
            return state
    }
}

export default topicReducer

