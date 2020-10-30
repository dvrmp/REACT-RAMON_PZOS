import * as globalTypes from '../action-types/global.action-types';

const initialState = {
    SEASONS: [1,2,3,4,5],
    SEASON_SELECTED: 0
};

export const globalReducer = (state=initialState, action)=>{
    switch (action.type) {
        case globalTypes.SEASON_SELECTED:
            return {
                ...state,
                SEASON_SELECTED: action.payload
            }    
        default: return state;
    }
}