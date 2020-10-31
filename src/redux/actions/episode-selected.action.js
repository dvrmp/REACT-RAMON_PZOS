import * as episodeSelectedTypes from '../action-types/episode-selected.action-types';

export const selectEpisode = (episode) => {
    return {
        type: episodeSelectedTypes.SELECTED_EPISODE,
        payload: episode
    }
}

export const getQuoteCharacter = (character) => {
    return {
        type: episodeSelectedTypes.CALLING_QUOTE_EPISODE,
        payload: character
    }
}