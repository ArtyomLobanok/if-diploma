import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import catalogLoadReducer from './reducers/catalogLoadReducer'
import userReducer from './slices/userSlice';
import productLoadReducer from "./reducers/productLoadReducer";

const rootReducer = combineReducers({
    user: userReducer,
    catalogLoadReducer,
    productLoadReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user',]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);