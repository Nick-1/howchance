import React, {useState} from "react";
import createItemService from "../services/createItemService";
import {useSelector} from "react-redux";
import {RootState} from "../types";

const ItemModal = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const currentTopic = useSelector((state: RootState)=> state.topics.currentTopic)

    const addItemHandler = () => {
        createItemService(title, description, currentTopic)
    }

    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>Add new Item</h4>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="title"
                                    type="text"
                                    className="validate"
                                    onChange={ e => setTitle(e.target.value) }
                                />
                                <label htmlFor="title">Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="description"
                                    className="materialize-textarea"
                                    onChange={ e => setDescription(e.target.value) }
                                />
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={addItemHandler}>Add</a>
            </div>
        </div>
    )
}

export default ItemModal