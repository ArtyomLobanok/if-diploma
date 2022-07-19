import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import catalogLoadReducer from './reducers/catalogLoadReducer'
import userReducer from './slices/userSlice';
import showSectionCategoryReducer from "./reducers/showSectionCategoryReducer";
import currentPageToShowReducer from "./reducers/currentPageToShowReducer";
import searchDataReducer from "./reducers/searchDataReducer";
import SearchShowReducer from "./reducers/showSearchReducer";
import InputTextSearchReducer from "./reducers/inputTextSearchReducer";
import showSearchResultsReducer from "./reducers/showSerchResultReducer";
import unloadDataReducer from "./reducers/unloadDataReducer";
import basketReducer from "./cart/basketReducer";
import idLoadReducer from "./reducers/idLoadReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import emailSendReducer from "./reducers/emailLoadReducer";

const rootReducer = combineReducers({
    user: userReducer,
    catalogLoadReducer,
    showSectionCategoryReducer,
    currentPageToShowReducer,
    searchDataReducer,
    SearchShowReducer,
    InputTextSearchReducer,
    showSearchResultsReducer,
    unloadDataReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
    idLoadReducer,
    emailSendReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'unloadDataReducer', 'favorites']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);