import ActionType from "./actionType"

// Breadcrumbs
const set_breadcrumbs = (payload,activePage) => {
    return {
        type : ActionType.SET_BREADCRUMBS,
        payload : payload,
        activePage : activePage
    }
}

// Member Data
const set_member_data = (payload) => {
    return{
        type : ActionType.SET_MEMBER_DATA,
        payload : payload
    }
}


export {
    set_member_data,
    set_breadcrumbs
}