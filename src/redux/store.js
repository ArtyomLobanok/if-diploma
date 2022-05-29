import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import catalogLoadReducer from './reducers/catalogLoadReducer'

const rootReducer = combineReducers({
    catalogLoadReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['',]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);