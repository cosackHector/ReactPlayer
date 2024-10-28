import { combineReducers, createStore } from 'redux';
import { playlistReducer } from "./playlistsReducer";
import { authReducer } from './authReducer';

const reducers = combineReducers({
    playlists: playlistReducer,
    auth: authReducer,
});

export const store = createStore(reducers);

