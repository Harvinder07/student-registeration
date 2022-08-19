import { ActionType } from "../constant/action-type";

const initialState = {
    student:[]
}

export const studentReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.ADD_STUDENT:
            return {...state, student: [...state.student, payload]}
        case ActionType.DELETE_STUDENT:
            return state
        default:
            return state
    }
}