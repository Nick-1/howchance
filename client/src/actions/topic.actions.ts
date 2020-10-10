import {ADD_TOPIC, GET_TOPICS, REMOVE_TOPIC, SET_CURRENT_TOPIC} from "./types/topics.type";
import {Itopics, TopicsAction} from "../types";

export const addTopicAction = (topic: Itopics) => ({ type: ADD_TOPIC, payload: topic })
export const getTopicsAction = (topics: Itopics[]): TopicsAction => ({ type: GET_TOPICS, payload: topics })
export const removeTopicAction = (id: string) => ({ type: REMOVE_TOPIC, payload: id })
export const setCurrentTopicAction = (id: string) => ({ type: SET_CURRENT_TOPIC, payload: id })