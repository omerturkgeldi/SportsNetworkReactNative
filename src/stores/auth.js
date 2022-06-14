import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        userId: "ed3e6bea-fd43-4323-8d9c-1d8d848eb3ed",
        loggedIn: false,
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        setUserId: (state, action) => {
            state.value = action.payload
        },
        setLoggedIn: state => {
            state.value == !state.value
        }
    }
})

export const { increment, decrement, setUserId, setLoggedIn } = auth.actions

export default auth.reducer