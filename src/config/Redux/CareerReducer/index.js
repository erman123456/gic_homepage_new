import ActionType from "../actionType"

const careerState = {
    data : []
}

const careerReducer = (state = careerState, action) => {
    if(action.type === ActionType.SET_CAREER_DATA){
        return{
            ...state,
            data : action.value ? [...action.value] : []
        }
    }
    return state
}

export default careerReducer