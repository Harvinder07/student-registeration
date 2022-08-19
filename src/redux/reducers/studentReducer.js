import { ActionType } from "../constant/action-type";

const initialState = {
    student:[
        // {
        //     firstname: 'harvinder',
        //     lastname: 'singh',
        //     fathername: 'Pritam Singh',
        //     emailid: 'harvinderasingh0703@gmail.com',
        //     address: 'jawahar nagar',
        //     mobile: 9876543210,
        //     gender: 'male',
        //     dob: '03071992',
        //     country: 'india'
        // }
    ]
}

console.log(initialState, 'iniria;lmamsd')

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