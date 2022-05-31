import { createSlice } from '@reduxjs/toolkit'
/**
 * Un reducer reçoit 
 *  - un type d'action
 *  - un state initial
 */

const switchTheme = createSlice({
    name: "Mode Theme",
    initialState: {
        mode: "light"
    },
    reducers: {
        toggle: (state, action) => {
            return {...state, mode: action.payload}
        }, 
    }
})

export const { toggle, setTheme } = switchTheme.actions;

export default switchTheme.reducer;


