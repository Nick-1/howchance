import {GET_TOPICS} from "../redux/actions/types/topics.type";
import {LOGIN_USER, LOGOUT_USER} from "../redux/actions/types/login.type";

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
    count: Number
}

export interface ItopicReducer {
    topicList: Itopics[],
    currentTopic: null | string
}

export interface IItemReducer {
    itemList: IItems[],
    currentItem: IItems | null
}

interface IGetTopicAction {
    type: typeof GET_TOPICS;
    payload: Itopics[]
}

export type TopicsAction = IGetTopicAction

export interface RootState {
    topics: ItopicReducer,
    items:  IItemReducer,
    login: ILoginReducer
}

// LOGIN | LOGOUT
export interface ILoginReducer {
    currentUser: currentUserType
}

export type currentUserType = {
    email: null | string,
    userId: null | string,
    lang: null | string ,
    theme: null | string
}

export type LogOutActionType = {
    type: typeof LOGOUT_USER,
    payload: currentUserType
}

