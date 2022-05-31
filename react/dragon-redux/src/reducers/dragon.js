import { ADD_DRAGON, SET_DRAGON, DELETE_DRAGON, SORT_DRAGONS } from '../contants/actions';

// initialisation des states : SOURCE DE VERITE
const initialState = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: "",
    count: 3
}

let reducerDragon = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_DRAGON:
            const newDragon = action.dragon;

            const arrayWithAddedDragon = [...state.dragons, newDragon];

            console.log(state.count);
            return { 
                ...state,
                dragons: arrayWithAddedDragon,
                count: state.count + 1
            }
        
        case SET_DRAGON: 
            const { dragon } = action;
            return {
                ...state, 
                dragon: dragon
            }

        case DELETE_DRAGON: 
            const { idDragon } = action;
            const arrayWithoutDeletedDragon = state.dragons.filter((dragon, index) => {
                // on retourne l'index qui ne correspond pas avec l'id visé
                return index != idDragon;
            });

            return {
                ...state, 
                dragons: arrayWithoutDeletedDragon,
                count: state.count - 1
            }

        case SORT_DRAGONS: 
        
            const arraySortDragons = [...state.dragons];

            console.log(arraySortDragons)
            console.log(state.dragons)


            return {
                ...state, 
                dragons: arraySortDragons.reverse()
            }
            

        default:
            return state;
    }
}

export default reducerDragon;