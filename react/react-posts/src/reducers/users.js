import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: "Users",
    initialState: {
        data: []
    },
    reducers: {
        initUsers: (state, action) => { state.data = action.payload }
    }
})

export const { initUsers } = usersSlice.actions;


export default usersSlice.reducer;