import ActionType from "../../actionType"

const setCareerData = (payload) => {
    return {
        type : ActionType.SET_CAREER_DATA,
        value : payload
    }
}

export default setCareerData