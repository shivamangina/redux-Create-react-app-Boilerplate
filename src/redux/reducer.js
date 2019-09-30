import {combineReducers} from 'redux'

const initialState =["appklr","mango","grapes"]

const taskReducer = (state = initialState, { type, payload }) => {


    switch (type) {

    case "ADD_TASK":
        return [...state,payload]
    case "DEL_TASK":
        state.splice(payload,1)
        return [...state]

    default:
        return state    
    }
}

const rootReducer = combineReducers({
    tasks:taskReducer
})

export default rootReducer