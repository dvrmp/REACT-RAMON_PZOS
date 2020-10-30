import { globalReducer } from '../reducers/global.reducer';
import { episodesReducer } from '../reducers/episodes.reducer';
export const applicationReducers = {
    GLOBAL: globalReducer,
    EPISODES_SEASON: episodesReducer,
    EPISODE_SELECTED: {},
    CHARACTERS:{},
    KILLERS: {}
}