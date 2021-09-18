import {configureStore, createReducer} from '@reduxjs/toolkit';

export interface AppState {
}

const initialState: AppState = {};

const rootReducer = createReducer(initialState, (() => {

}));

export const store = configureStore<AppState>({
  reducer: rootReducer,
});
