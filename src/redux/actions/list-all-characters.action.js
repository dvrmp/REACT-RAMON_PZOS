import * as listAllCharacters from '../action-types/list-all-characters.action-types';

export const getAllCharacters = () => {
    return {
        type: listAllCharacters.CALLING_ALL_CHARACTERS
    }
}