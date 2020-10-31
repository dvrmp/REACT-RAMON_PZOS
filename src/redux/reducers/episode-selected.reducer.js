import * as episodeSelectedTypes from '../action-types/episode-selected.action-types';

const initialState = {
    LOADING: false,
    EPISODE: {},
    QUOTE_AUTHOR:{},
    ERROR_REQUEST: {}
}

export const episodeSelectedReducer = (state=initialState, action) => {
    switch (action.type) {
        case episodeSelectedTypes.SELECTED_EPISODE:
            return {
                ...state,
                EPISODE: action.payload
            }    
        case episodeSelectedTypes.CALLING_QUOTE_EPISODE:
            return {
                ...state,
                LOADING:true,
                ERROR_REQUEST:{}
            }  
        case episodeSelectedTypes.CALLED_QUOTE_EPISODE_SUCCESS:
            return {
                ...state,
                LOADING:false,
                QUOTE_AUTHOR: action.payload
            } 
        case episodeSelectedTypes.CALLED_QUOTE_EPISODE_FAILED:
            return {
                ...state,
                LOADING:false,
                ERROR_REQUEST: action.payload
            }       
        default: return state;
    }
}