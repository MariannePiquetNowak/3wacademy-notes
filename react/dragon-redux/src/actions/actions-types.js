import { ADD_DRAGON, SET_DRAGON, DELETE_DRAGON, SORT_DRAGONS } from '../contants/actions';

// Le payload remplace la "clé: valeur"
export const addDragon = payload => {
    return {
        type: ADD_DRAGON, payload
    }
}

export const setDragon = payload => {
    return {
        type: SET_DRAGON, payload
    }
}

export const deleteDragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    }
}

export const sortDragons = payload => {
    return {
        type: SORT_DRAGONS, payload
    }
}