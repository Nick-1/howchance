import {GET_TOPICS} from "../actions/types/topics.type";
import {LOGIN_USER, LOGOUT_USER} from "../actions/types/login.type";

export interface Itopics {
    _id: string
    title: string,
    owner: string,
    items:[]
}

export interface IItems {
    _id: string
    title: string,
    description: string,
    image?: string,
    topic: string
}

export interface ItopicReducer {
    topicList: Itopics[],
    currentTopic: null | string
}

export interface IItemReducer {
    itemList: IItems[]
}

interface IGetTopicAction {
    type: typeof GET_TOPICS;
    payload: Itopics[]
}

export type TopicsAction = IGetTopicAction

export interface RootState {
    topics: ItopicReducer,
    items: IItemReducer,
    login: ILoginReducer
}

// LOGIN | LOGOUT
export interface ILoginReducer {
    currentUser: currentUserType
}

export type currentUserType = {
    email: null | string,
    userId: null | string
}

export type LogOutActionType = {
    type: typeof LOGOUT_USER,
    payload: currentUserType
}

