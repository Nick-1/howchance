import React, {useEffect, useState} from "react";
import createItemService from "../services/items/createItemService";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types";
import {addItemAction} from "../redux/actions/item.actions";
import server from "../helpers/appVariables"

const ItemModal = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const currentTopic: any = useSelector((state: RootState) => state.topics.currentTopic)
    const currentItem = useSelector((state: RootState) => state.items.currentItem)
    const dispatch = useDispatch()
    const formData = new FormData()

    useEffect(() => {
        if (currentItem) {
            setTitle(currentItem.title)
            setDescription(currentItem.description)
            if (currentItem.image) setImage(currentItem.image)
        }
    }, [currentItem])

    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems, {onCloseEnd: clearFields});
    }, [])

    const addItemHandler = async () => {
        formData.append('title', title)
        formData.append('description', description)
        formData.append('topic', currentTopic)
        const data = await createItemService(formData)
        dispatch(addItemAction(data))
    }

    const changeFileInputHandler = (e: any) => {
        formData.append("avatar", e.target.files[0]);
    }

    function clearFields() {
        setTitle('')
        setDescription('')
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
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder='Title'
                                    value={title}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="description"
                                    className="materialize-textarea"
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder='Description'
                                    value={description}
                                />
                            </div>
                        </div>
                        <div className="file-field input-field">
                            <div className="btn">
                                <i className="material-icons left">photo</i>
                                <span>Image</span>
                                <input type="file" name="avatar" onChange={changeFileInputHandler}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"/>
                            </div>
                        </div>
                        <div>
                            <img src={`${server.url}/${image}`} alt=""/>
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