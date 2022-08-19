import { ActionType } from "../constant/action-type";

export const addStudent = (student) => {
    return {
        type: ActionType.ADD_STUDENT,
        payload: student
    }
}

export const deleteStudent = (students) => {
    return {
        type: ActionType.DELETE_STUDENT,
        payload: students
    }
}