import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import style from "./List.module.scss"
import {removeItemAction, setCurrentItemAction} from "../../redux/actions/item.actions";
import removeItemService from "../../services/items/removeItemService";

const ItemList = () => {
    const items = useSelector((state: RootState)=> state.items)
    const dispatch = useDispatch()

    if (!items.itemList.length) {
        return <p className='center'>This topic don't have any items yet</p>
    }

    const removeItemHandler = (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        dispatch(removeItemAction(id))
        removeItemService(id)
    }

    const getItemHandler = (id: string) => {
        dispatch(setCurrentItemAction(id))
    }

    return (
        <div className="collection">

            {items.itemList.map(item => (
                <div
                    data-target="modal1"
                    className={`collection-item modal-trigger ${style.customListItem}`}
                    key={item._id}
                    onClick={ (e) => getItemHandler(item._id) }
                >
                    {item.title}
                    <button
                        type='button'
                        className="btn-floating btn-small waves-effect waves-light red right"
                        onClick={ (e) => removeItemHandler(e, item._id) }>
                        <i className="material-icons center">clear</i>
                        button
                    </button>
                </div>
            ))}
        </div>
    )
}


export default ItemList