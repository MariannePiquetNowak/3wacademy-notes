import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: "Posts",
    initialState: {
        data: []
    },
    reducers: {
        initPosts: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { initPosts } = postSlice.actions;

export default postSlice.reducer;
