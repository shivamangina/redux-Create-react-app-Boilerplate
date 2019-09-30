import {combineReducers} from 'redux'

const initialState = {
    data:"data from store"
}

const taskReducer = (state = initialState, { type, payload }) => {


    switch (type) {

    case "ADD_TASK":
        return {...state,payload}
    case "DEL_TASK":
        return {...state}

    default:
        return state    
    }
}

const rootReducer = combineReducers({
    tasks:taskReducer
})

export default rootReducer