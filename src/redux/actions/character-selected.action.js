import * as characterSelectedTypes from '../action-types/character-selected.action-types';

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