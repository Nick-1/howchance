import React from "react";
import itemReducer from "./itemReducer";
import {IItemReducer, IItems} from "../../types";
import {
    addItemAction,
    editItemAction,
    getItemsAction,
    removeItemAction,
    setCurrentItemAction
} from "../actions/item.actions";


describe('item reducer', () => {
    let state: IItemReducer, items: IItems[], item: IItems
    beforeEach(() => {
        state = {
            itemList: [],
            currentItem: null
        }
        items = [
            {
                _id: 'id_1',
                title: 'Test title 1',
                description: 'Test description 1',
                image: 'image_path_1',
                topic: 'topic_id_1',
                count: 0
            },
            {
                _id: 'id_2',
                title: 'Test title 2',
                description: 'Test description 2',
                topic: 'topic_id_2',
                count: 0
            }
        ]
        item = {
            _id: 'id_3',
            title: 'Test title 3',
            description: 'Test description 3',
            image: 'image_path_3',
            topic: 'topic_id_1',
            count: 0
        }
    })

    it('should set 2 items in item list', () => {
        expect(state.itemList.length).toBe(0)
        const newState = itemReducer(state, getItemsAction(items))
        expect(newState.itemList.length).toBe(2)
    })

    it('should add 1 item in item list', () => {
        expect(state.itemList.length).toBe(0)
        const newState = itemReducer(state, addItemAction(item))
        expect(newState.itemList.length).toBe(1)
    })

    it('should remove 1 item from item list', () => {
        const stateWithItems = itemReducer(state, getItemsAction(items))
        const newState = itemReducer(stateWithItems, removeItemAction('id_1'))
        expect(newState.itemList.length).toBe(1)
        expect(newState.itemList[0]._id).toBe('id_2')
    })

    it('should edit an item with id: "id_1"', () => {
        const newTopicInfo: any = {
            item: {
                _id: 'id_1',
                title: 'Changed test title 1',
                description: 'Changed description 1',
                topic: 'topic_id_1',
                count: 0
            }
        }
        const stateWithItems = itemReducer(state, getItemsAction(items))
        expect(stateWithItems.itemList[0].title).toBe('Test title 1')
        const newState = itemReducer(stateWithItems, editItemAction('id_1', newTopicInfo))
        expect(newState.itemList[1].title).toBe('Changed test title 1')
        expect(newState.itemList.length).toBe(2)
    })

    it('should set current item', () => {
        const stateWithItems = itemReducer(state, getItemsAction(items))
        expect(state.currentItem).toBeNull()
        const newState: any = itemReducer(stateWithItems, setCurrentItemAction('id_1'))
        expect(newState.currentItem._id).toBe('id_1')
    })
})