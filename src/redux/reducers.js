import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value]
            break;
        case 'REMOVE_CAR':
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
            break;
        default:
            return state;
    }
}

export default combineReducers({ user, cars })