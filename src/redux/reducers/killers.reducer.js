import * as killersTypes from '../action-types/killers.action-types';

const initialState = {
    LOADING: false,
    KILLERS: [],
    ERROR_REQUEST:{}
};

export const killersReducer = (state=initialState,action) => {
    switch (action.type) {
        case killersTypes.CALLING_KILLERS:
            return {
                LOADING: true,
                KILLERS: [],
                ERROR_REQUEST:{}
            }
        case killersTypes.CALLED_KILLERS_SUCCESS:
            return {
                LOADING: false,
                KILLERS: action.payload,
                ERROR_REQUEST:{}
            }
        case killersTypes.CALLED_KILLERS_SUCCESS:
            return {
                LOADING: false,
                KILLERS: [],
                ERROR_REQUEST:action.payload
            }
        default: return state;
    }
}