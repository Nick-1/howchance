import {IItems} from "../../types";
import {ADD_ITEM, EDIT_ITEM, GET_ITEMS, REMOVE_ITEM, SET_CURRENT_ITEM} from "./types/items.type";

export const addItemAction = (item: IItems) => ({ type: ADD_ITEM, payload: item })
export const getItemsAction = (items: IItems[]) => ({ type: GET_ITEMS, payload: items })
export const removeItemAction = (id: string) => ({ type: REMOVE_ITEM, payload: id })
export const setCurrentItemAction = (id: string) => ({ type: SET_CURRENT_ITEM, payload: id })
export const editItemAction = (id: string, data: IItems) => ({ type: EDIT_ITEM, payload: {id, data} })