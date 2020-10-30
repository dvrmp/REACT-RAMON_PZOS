import * as episodesTypes from '../action-types/episodes.action-types';

export const getAllEpisodesBySeason = (season_selected) => { 
    return { 
        type: episodesTypes.CALLING_EPISODES,
        payload: season_selected
    } 
}