import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addTopicAction, getTopicsAction} from "../redux/actions/topic.actions";
import createTopicService from "../services/topics/createTopicService";
import TopicList from "./List/TopicList";
import getTopicsService from "../services/topics/getTopicsService";

const Topics = () => {
    const dispatch = useDispatch()
    const getTopicList = useCallback(async () => {
        const data = await getTopicsService()
        dispatch(getTopicsAction(data))
    }, [dispatch])


    useEffect(() => {
        getTopicList()
    }, [getTopicList])

    const pressHandler = async (event: any) => {
        if (event.key === 'Enter') {
            const topic = await createTopicService(event.target.value)
            dispatch(addTopicAction(topic))
        }
    }

    return (
        <div className='col m2 s12'>
            <h3>Topics</h3>
            <div>
                <div className="input-field">
                    <input
                        id='topic_title'
                        type='text'
                        name='topic_title'
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="topic_title">Type title and press Enter</label>
                </div>
            </div>
            <TopicList/>
        </div>
    )
}

export default Topics