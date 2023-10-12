import { createSlice } from "@reduxjs/toolkit";

export type StudentProps = {
    id: number,
    name: string,
    username: string,
    alamat: string,
    telepon: string,
    foto: string,
    guardian: string,
    classroom: string,
    teacher: string,
    isStudent: string
}

export type AuthInitStateProps = {
    student: StudentProps | null
}

const authStudentSlie = createSlice({
    name: 'authStudent',
    initialState: <AuthInitStateProps>{
        student: null
    },
    reducers: {
        setAuth(state, action) {
            state.student = action.payload
        },
        unsetAuth(state) {
            state.student = null
        }
    }
})

export const authStudentReducer = authStudentSlie.reducer
export const authStudentAction = authStudentSlie.actions