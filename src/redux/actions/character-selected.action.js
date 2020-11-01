import * as characterSelectedTypes from '../action-types/character-selected.action-types';
import * as quptesTypes from '../action-types/quote-actions.types';

export const selectCharacter = (character_name) => { 
    return { 
        type: characterSelectedTypes.CALLING_CHARACTTER,
        payload: character_name
    } 
}

export const checkDeathCharacter = (character_name) => {
    return {
        type: characterSelectedTypes.CHECKING_CHARACTER_DEATH,
        payload: {
            character: character_name,
        }
    }
} 

export const getEpisodesCharacter = (character_name) => {
    return {
        type: characterSelectedTypes.CALLING_CHARACTER_EPISODES,
        payload: {
            character: character_name,
        }
    }
} 

export const getQuotesCharacters = (character_name) => {
    return {
        type: quptesTypes.CALLING_QUOTES_CHARACTER,
        payload: {
            character: character_name,
        }
    }
} 