import React from "react";
import removeTopicService from "../../services/topics/removeTopicService";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import {removeTopicAction, setCurrentTopicAction} from "../../redux/actions/topic.actions";
import style from "./List.module.scss"
import getItemsService from "../../services/items/getItemsService";
import {getItemsAction} from "../../redux/actions/item.actions";

const TopicList = () => {
    const topics = useSelector((state: RootState)=> state.topics)
    const dispatch = useDispatch()

    if (!topics.topicList.length) {
        return <p className='center'>You don't have any topic yet</p>
    }

    const removeTopicHandler = (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        dispatch(removeTopicAction(id))
        removeTopicService(id)
    }

    const getItemsHandler = async ( id: string) => {
        dispatch(setCurrentTopicAction(id))
        const data = await getItemsService(id)
        dispatch(getItemsAction(data))
    }

    return (
        <div className="collection">
            {topics.topicList.map(topic => (
                <div
                    className={`collection-item ${style.customListItem}`}
                    key={topic._id}
                    onClick={ (e) => getItemsHandler(topic._id) }
                >
                    <span className={`${style.itemListText}`}>{topic.title}</span>
                    <button
                        type='button'
                        className="btn-floating btn-small waves-effect waves-light right"
                        onClick={ (e) => removeTopicHandler(e, topic._id) }>
                        <i className="material-icons center">clear</i>
                        button
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TopicList