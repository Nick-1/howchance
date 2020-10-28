import {IItemReducer} from "../../types";
import {ADD_ITEM, SET_CURRENT_ITEM, GET_ITEMS, REMOVE_ITEM, EDIT_ITEM} from "../actions/types/items.type";


const initialState: IItemReducer = {
    itemList: [],
    currentItem: null
}

const itemReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, itemList: [...state.itemList, action.payload.item]}
        case EDIT_ITEM:
            state.itemList = state.itemList.filter(item => item._id !== action.payload.id)
            return {...state, itemList: [...state.itemList, action.payload.data.item]}
        case REMOVE_ITEM:
            return {...state, itemList: state.itemList.filter(item => item._id !== action.payload)}
        case GET_ITEMS:
            return {...state, itemList: action.payload}
        case SET_CURRENT_ITEM:
            return {...state, currentItem: state.itemList.find(item => item._id === action.payload) || null}
        default:
            return state
    }
}

export default itemReducer

