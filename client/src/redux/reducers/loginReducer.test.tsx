import React from "react";
import itemReducer from "./itemReducer";
import {currentUserType, ILoginReducer} from "../../types";
import {} from "../actions/item.actions";
import {changeThemeAction, loginAction, logOutAction} from "../actions/login.actions";
import loginReducer from "./loginReducer";


describe('item reducer', () => {
    let state: ILoginReducer, user: currentUserType
    beforeEach(() => {
        state = {
            currentUser: {
                email: null,
                userId: null,
                lang: 'en',
                theme: 'day'
            }
        }
        user = {
            email: 'test@test.com',
            userId: 'user_id_1',
            lang: 'en',
            theme: 'day'
        }
    })

    it('should set current user', () => {
        expect(state.currentUser.email).toBeNull()
        const newState = loginReducer(state, loginAction(user))
        expect(newState.currentUser.email).toBe('test@test.com')
    })

    it('should\'t has current user', () => {
        const stateWithUser = loginReducer(state, loginAction(user))
        expect(stateWithUser.currentUser.email).toBe('test@test.com')
        const newState = loginReducer(stateWithUser, logOutAction())
        expect(newState.currentUser.email).toBeNull()
    })

    it('should change theme', () => {
        const stateWithUser = loginReducer(state, loginAction(user))
        expect(stateWithUser.currentUser.theme).toBe('day')
        const newState = loginReducer(stateWithUser, changeThemeAction('night'))
        expect(newState.currentUser.theme).toBe('night')
    })

})