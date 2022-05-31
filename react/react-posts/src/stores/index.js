import { configureStore } from '@reduxjs/toolkit';

import interfaceReducer from "../reducers/interface";
import postsReducer from '../reducers/posts';
import usersReducer from '../reducers/users';
import paginationReducer from '../reducers/pagination';

const store = configureStore({
    reducer: {
        interface: interfaceReducer,
        posts: postsReducer,
        users: usersReducer,
        pagination: paginationReducer,
    },
})

export default store;
