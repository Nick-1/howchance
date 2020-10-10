import React, {useEffect} from "react";
import ItemModal from "./ItemModal";
import ItemList from "./List/ItemList";
import {useSelector} from "react-redux";
import {RootState} from "../types";

const Items = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems);
    })

    const currentTopic = useSelector((state: RootState)=> state.topics.currentTopic)

    return (
        <div className='col m2 s12'>
            <h3>Items</h3>

            { currentTopic &&
            <button
                data-target="modal1"
                className="btn waves-effect waves-light modal-trigger"
                type="button"
                name="action">Add Item
                <i className="material-icons right">add</i>
            </button> }

            <ItemList/>

            <ItemModal/>
        </div>
    )
}

export default Items