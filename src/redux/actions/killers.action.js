import * as killerTypes from '../action-types/killers.action-types';

export const getKillers = () => {
    return {
        type: killerTypes.CALLING_KILLERS,
    };
};