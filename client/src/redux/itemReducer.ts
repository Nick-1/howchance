import {IItemReducer} from "../types";
import {ADD_ITEM, GET_ITEMS, REMOVE_ITEM} from "../actions/types/items.type";


const initialState: IItemReducer = {
    itemList: []
}

const itemReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, itemList: [...state.itemList, action.payload.item] }
        case REMOVE_ITEM:
            return {...state, itemList: state.itemList.filter(item => item._id !== action.payload)}
        case GET_ITEMS:
            return {...state, itemList: action.payload}
        default:
            return state
    }
}

export default itemReducer

