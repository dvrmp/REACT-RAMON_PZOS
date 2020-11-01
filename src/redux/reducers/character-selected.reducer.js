import * as charactersTypes from '../action-types/character-selected.action-types';
import * as quotesTypes from '../action-types/quote-actions.types';
const initialState = {
    LOADING: false,
    ERROR_REQUEST: {},
    DATA_RESPONSE: {},
    EPISODE_DEATH: {},
    DEATH_COUNT: 0,
    EPISODES_CHARACTER: [],
    QUOTES_CHARACTER: []
}

export const characterSelectedReducer = (state=initialState, action) => {
    switch (action.type) {
        case charactersTypes.CALLING_CHARACTTER:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: [],
                EPISODE_DEATH: {},
                EPISODES_CHARACTER: [],
                QUOTES_CHARACTER: []

            }   
        case charactersTypes.CALLED_CHARACTER_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                DATA_RESPONSE: action.payload,
                EPISODE_DEATH: {},
                QUOTES_CHARACTER: []
            }   
        case charactersTypes.CALLED_CHARACTER_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: [],
                EPISODE_DEATH: {},
                
            }  
        case charactersTypes.CHECKING_CHARACTER_DEATH:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: [],
                DEATH_COUNT: 0,
                EPISODE_DEATH: {}
            }   
        case charactersTypes.CHECKED_CHARACTER_DEATH_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                EPISODE_DEATH: action.payload.episodeDeath,
                DEATH_COUNT: action.payload.countDeath
            }   
        case charactersTypes.CALLED_CHARACTER_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: [],
                EPISODE_DEATH: {},
                DEATH_COUNT: 0
            }  
        case charactersTypes.CALLING_CHARACTER_EPISODES:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: [],
                DEATH_COUNT: 0,
                EPISODE_DEATH: {}
            }   
        case charactersTypes.CALLED_CHARACTER_EPISODES_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                EPISODES_CHARACTER: action.payload
            }   
        case charactersTypes.CALLED_CHARACTER_EPISODES_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: [],
                EPISODE_DEATH: {},
                DEATH_COUNT: 0,
                EPISODES_CHARACTER: []
            }  

        case quotesTypes.CALLING_QUOTES_CHARACTER:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: [],
                DEATH_COUNT: 0,
                EPISODE_DEATH: {}
            }   
        case quotesTypes.CALLED_QUOTES_CHARACTER_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                QUOTES_CHARACTER: action.payload || []
            }   
        case quotesTypes.CALLED_QUOTES_CHARACTER_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: [],
                EPISODE_DEATH: {},
                DEATH_COUNT: 0,
                EPISODES_CHARACTER: []
            }  
        default: return state;
    }
}