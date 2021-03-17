import {ADD, REMOVE, CLEAN} from '../types/cartType.js';

const initialState = {
    cart : [],
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,
                cart : action.payload
            }
        
        case REMOVE : 
            return {
                ...state,
                cart : action.payload
            }

        case CLEAN : 
            return {
                ...state,
                cart : action.payload
            }

        default : 
            return state
    }
}

export default cartReducer;