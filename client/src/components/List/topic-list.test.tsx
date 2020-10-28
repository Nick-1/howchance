import React from "react";
import TopicList from "./topic-list";
import {shallow} from 'enzyme'
import {Provider} from "react-redux";
import store from "../../redux/store";

describe('topic list component', () => {

    it('should render list component', () => {
        const wrapper = shallow(<Provider store={store}><TopicList/></Provider>)
        const topicList = wrapper.find(TopicList).first()
        expect(topicList.exists()).toBe(true)
    });
})