import * as episodeSelectedTypes from '../action-types/episode-selected.action-types';
import * as deathsTypes from '../action-types/deaths.action.types';
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

export const checkDeathCharacter = (characters,episode) => {
    return {
        type: deathsTypes.CALLING_DEATHS,
        payload: {
            characters: characters,
            episode: episode
        }
    }
}