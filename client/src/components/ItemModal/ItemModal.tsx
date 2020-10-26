import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import {addItemAction, editItemAction} from "../../redux/actions/item.actions";
import server from "../../helpers/appVariables"
import style from "./ItemModal.module.scss"
import {isValid} from "../../hooks/validation.hook";
import itemsService from "../../services/itemsService";

const ItemModal = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [serverUrl, setServerUrl] = useState<any>('')
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
            setServerUrl(server.url)
        }
    }, [currentItem])

    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems, {onCloseEnd: clearFields});
    }, [])

    const addOrEditItemHandler = async () => {

        if (isValid('title', title)) {
            formData.append('title', title)
            formData.append('description', description)
            formData.append('topic', currentTopic)
            if (currentItem) {
                const data = await itemsService.edit(formData, currentItem._id)
                dispatch(editItemAction(currentItem._id, data))
            } else {
                const data = await itemsService.create(formData)
                dispatch(addItemAction(data))
            }
        }
    }

    const changeFileInputHandler = (e: any) => {
        formData.append("avatar", e.target.files[0]);
    }

    function clearFields() {
        setTitle('')
        setDescription('')
        setImage('')
    }

    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                {!currentItem && <h4>Add new Item</h4>}
                {currentItem && <h4>Edit item</h4>}

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
                        <div className={`${style.avatarBox}`}>
                            {image &&  <img className={`${style.avatar}`} src={`${serverUrl}/${image}`} alt=""/>}
                        </div>
                    </form>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!"
                   className="modal-close waves-effect waves-light btn"
                   onClick={addOrEditItemHandler}
                >
                    {currentItem && <>Edit <i className="material-icons right">edit</i></>}
                    {!currentItem && <>Add <i className="material-icons right">add</i></>}
                </a>
            </div>
        </div>
    )
}

export default ItemModal