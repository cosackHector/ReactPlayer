import { combineReducers, createStore } from 'redux';
import playlistsReducer from "./playlistsReducer";


const reducers = combineReducers({
    playlists: playlistsReducer,
});

export const store = createStore(reducers);

