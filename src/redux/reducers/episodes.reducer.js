import * as episodesTypes from '../action-types/episodes.action-types';
const initialState = {
    LOADING: false,
    ERROR_REQUEST: {},
    DATA_RESPONSE: [],
}

export const episodesReducer = (state=initialState, action) => {
    switch (action.type) {
        case episodesTypes.CALLING_EPISODES:
            return {
                ...state,
                LOADING: true,
                ERROR_REQUEST: {},
                DATA_RESPONSE: []
            }   
        case episodesTypes.CALLED_EPISODES_SUCCESS:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: {},
                DATA_RESPONSE: action.payload.episodes.filter((episode)=>episode.season===action.payload.season_selected.toString())
            }   
        case episodesTypes.CALLED_EPISODES_FAILED:
            return {
                ...state,
                LOADING: false,
                ERROR_REQUEST: action.payload,
                DATA_RESPONSE: []
            }  
        default: return state;
    }
}