import React from "react";
import removeTopicService from "../../services/removeTopicService";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import {removeTopicAction, setCurrentTopicAction} from "../../actions/topic.actions";
import style from "./List.module.scss"

const List = () => {
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

    const getItemsHandler = ( id: string) => {
        dispatch(setCurrentTopicAction(id))
    }


    return (
        <div className="collection">
            {topics.topicList.map(topic => (
                <div
                    className={`collection-item ${style.customListItem}`}
                    key={topic._id}
                    onClick={ (e) => getItemsHandler(topic._id) }
                >
                    {topic.title}
                    <button
                        type='button'
                        className="btn-floating btn-small waves-effect waves-light red right"
                        onClick={ (e) => removeTopicHandler(e, topic._id) }>
                        <i className="material-icons center">clear</i>
                        button
                    </button>
                </div>
            ))}
        </div>
    )
}


export default List