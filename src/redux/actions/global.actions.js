import * as globalTypes from '../action-types/global.action-types';

export const selectSeason = (season_index) => {
    return {
        type: globalTypes.SEASON_SELECTED,
        payload: season_index
    };
};