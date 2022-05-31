import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: "Pagination Reducer",
    initialState: {
        postsPerPage: "10",
        currentPage: 1
    },
    reducers: {
        /*
            Actions : 
            - incrémenter une page
            - décrémenter une page 
            - sélectionner le nombre de posts par page
            - set la page actuelle
        */

        setPostsPerPage: (state, action) => { state.postsPerPage = action.payload },

        setCurrentPage: (state, action) => { state.currentPage = action.payload },

        incrementPage: (state) => { state.currentPage += 1 },

        decrementPage: (state) => { state.currentPage -= 1 },

    }
})

export const { setPostsPerPage, setCurrentPage, incrementPage, decrementPage } = paginationSlice.actions;

export default paginationSlice.reducer;