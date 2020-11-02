import { globalReducer } from '../reducers/global.reducer';
import { episodesReducer } from '../reducers/episodes.reducer';
import { episodeSelectedReducer } from '../reducers/episode-selected.reducer';
import { characterSelectedReducer } from './character-selected.reducer';
import { killersReducer } from './killers.reducer';
import { listAllCharactersReducer } from './list-all-character.reducer';

export const applicationReducers = {
    GLOBAL: globalReducer,
    EPISODES_SEASON: episodesReducer,
    EPISODE_SELECTED: episodeSelectedReducer,
    CHARACTER_SELECTED: characterSelectedReducer,
    KILLERS: killersReducer,
    CHARACTERS: listAllCharactersReducer
}