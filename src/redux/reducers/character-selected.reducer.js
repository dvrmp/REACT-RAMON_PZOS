import * as charactersTypes from '../action-types/character-selected.action-types';
const initialState = {
    LOADING: false,
    ERROR_REQUEST: {},
    DATA_RESPONSE: {},
    EPISODE_DEATH: {},
}

export const characterSelectedReducer = (state=initialState, action) => {
    switch (action.type) {
        case charactersTypes.CALLING_CHARACTTER:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: []
            }   
        case charactersTypes.CALLED_CHARACTER_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                DATA_RESPONSE: action.payload
            }   
        case charactersTypes.CALLED_CHARACTER_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: []
            }  
        case charactersTypes.CHECKING_CHARACTER_DEATH:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: []
            }   
        case charactersTypes.CHECKED_CHARACTER_DEATH_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                EPISODE_DEATH: action.payload
            }   
        case charactersTypes.CALLED_CHARACTER_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: [],
                EPISODE_DEATH: {}
            }  
        default: return state;
    }
}