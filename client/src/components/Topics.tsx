import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addTopicAction, getTopicsAction} from "../actions/topic.actions";
import createTopicService from "../services/createTopicService";
import List from "./List/List";
import getTopicsService from "../services/getTopicsService";

const Topics = () => {
    const dispatch = useDispatch()
    const getTopicList = useCallback(async () => {
        const data = await getTopicsService()
        dispatch(getTopicsAction(data))
    }, [])


    useEffect(() => {
        getTopicList()
    }, [getTopicList])

    const pressHandler = async (event: any) => {
        if (event.key === 'Enter') {
            const topic = await createTopicService(event.target.value)
            dispatch(addTopicAction(topic))
            getTopicList()
            //event.target.value = ''
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
            <List/>
        </div>
    )
}

export default Topics