import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types";
import style from "./list.module.scss"
import {removeItemAction, setCurrentItemAction} from "../../redux/actions/item.actions";
import itemsService from "../../services/itemsService";

const ItemList = () => {
    const items = useSelector((state: RootState)=> state.items)
    const dispatch = useDispatch()

    if (!items.itemList.length) {
        return <p className='center'>This topic don't have any items yet</p>
    }

    const removeItemHandler = (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        dispatch(removeItemAction(id))
        itemsService.remove(id)
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
                    <span className={`${style.itemListText}`}>{item.title}</span>
                    <button
                        type='button'
                        className="btn-floating btn-small waves-effect waves-light right"
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