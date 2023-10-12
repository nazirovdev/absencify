import { configureStore } from "@reduxjs/toolkit";
import { authStudentReducer } from "./student/authStudentSlice";

export const store = configureStore({
    reducer: {
        authStudent: authStudentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>