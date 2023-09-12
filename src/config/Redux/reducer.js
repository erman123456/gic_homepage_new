import { combineReducers } from 'redux'
import ActionType from './actionType'
import careerReducer from './CareerReducer'


// Initial State
const initialState = {
    data: "Hello World"
}
const initialReducer = (state = initialState, action) => {
    if(action.type === ActionType.SET_INITIAL){
        return{
            ...state,
            data : action.value
        }
    }
    return state
}






export default combineReducers({
    initialReducer,
    careerReducer
})