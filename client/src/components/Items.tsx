import React from "react";
import ItemList from "./List/ItemList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {setCurrentItemAction} from "../redux/actions/item.actions";

const Items = () => {

    const currentTopic = useSelector((state: RootState)=> state.topics.currentTopic)
    const dispatch = useDispatch()
    const clearCurrentItem = () => {
        dispatch(setCurrentItemAction('null'))
    }

    return (
        <div className='col m4 s12'>
            <h3>Items</h3>

            { currentTopic &&
            <button
                data-target="modal1"
                className="btn waves-effect waves-light modal-trigger"
                type="button"
                name="action"
                onClick={clearCurrentItem}
            >Add Item
                <i className="material-icons right">add</i>
            </button> }
            <ItemList />
        </div>
    )
}

export default Items