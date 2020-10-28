import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addTopicAction, getTopicsAction} from "../redux/actions/topic.actions";
import TopicList from "./List/topic-list";
import {isValid} from "../hooks/validation.hook";
import topicsService from "../services/topicsService";

const Topics = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const getTopicList = useCallback(async () => {
        const data = await topicsService.topicList()
        dispatch(getTopicsAction(data))
    }, [dispatch])

    useEffect(() => {
        getTopicList()
    }, [getTopicList])

    const pressHandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && isValid('title', title)) {
            const topic = await topicsService.create(title)
            console.log(topic)
            dispatch(addTopicAction(topic))
            setTitle('')
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
    }

    return (
        <div className='col m3 s12'>
            <h3>Topics</h3>
            <div>
                <div className="input-field">
                    <input
                        id='topic_title'
                        type='text'
                        name='topic_title'
                        onKeyPress={pressHandler}
                        value={title}
                        onChange={changeHandler}
                    />
                    <label htmlFor="topic_title">Type title and press Enter</label>
                </div>
            </div>
            <TopicList/>
        </div>
    )
}

export default Topics