import topicReducer from "./topicReducer";
import {addTopicAction, getTopicsAction, removeTopicAction, setCurrentTopicAction} from "../actions/topic.actions";
import {ItopicReducer, Itopics} from "../../types";


describe('topic reducer', () => {
    let state: ItopicReducer, topics: Itopics[], topic: Itopics;
    beforeEach(() => {
        state = {
            topicList: [],
            currentTopic: null
        }
        topics = [
            {
                _id: '1',
                title: 'Test title 1',
                owner: 'test_user_1',
                items: []
            },
            {
                _id: '2',
                title: 'Test title 2',
                owner: 'test_user_2',
                items: []
            }
        ]
        topic = {
            _id: '3',
            title: 'New topic test title',
            owner: 'owner',
            items: []
        }
    })

    it('should show topic list with 0 topics', () => {
        expect(state.topicList.length).toBe(0)
    });

    it('should show topic list with 2 topics', () => {
        const action = getTopicsAction(topics)
        const newState = topicReducer(state, action)
        expect(newState.topicList.length).toBe(2)
    });

    it('should add 1 topic', () => {
        expect(state.topicList.length).toBe(0)
        const action = addTopicAction(topic)
        const newState = topicReducer(state, action)
        expect(newState.topicList.length).toBe(1)
    });

    it('should remove 1 topic', () => {
        const stateWithTopics = topicReducer(state, getTopicsAction(topics))
        expect(stateWithTopics.topicList.length).toBe(2)
        const action = removeTopicAction('1')
        const newState = topicReducer(stateWithTopics, action)
        expect(newState.topicList.length).toBe(1)
    });

    it('should set current topic', () => {
        expect(state.currentTopic).toBeNull()
        const action = setCurrentTopicAction('1')
        const newState = topicReducer(state, action)
        expect(newState.currentTopic).toBe('1')
    });
})
