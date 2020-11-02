import * as listAllCharactersTypes from '../action-types/list-all-characters.action-types';
const initialState = {
    LOADING: false,
    ERROR_REQUEST: {},
    DATA_RESPONSE: []
}

export const listAllCharactersReducer = (state=initialState, action) => {
    switch (action.type) {
        case listAllCharactersTypes.CALLING_ALL_CHARACTERS:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: []
            }    
        case listAllCharactersTypes.CALLING_ALL_CHARACTERS_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                DATA_RESPONSE: action.payload
            }    
        case listAllCharactersTypes.CALLING_ALL_CHARACTERS_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: []
            }   
        default: return state;
    }
}