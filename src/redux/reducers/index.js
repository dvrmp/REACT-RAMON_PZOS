import { globalReducer } from '../reducers/global.reducer';
import { episodesReducer } from '../reducers/episodes.reducer';
import { episodeSelectedReducer } from '../reducers/episode-selected.reducer';

export const applicationReducers = {
    GLOBAL: globalReducer,
    EPISODES_SEASON: episodesReducer,
    EPISODE_SELECTED: episodeSelectedReducer,
    CHARACTERS:{},
    KILLERS: {}
}