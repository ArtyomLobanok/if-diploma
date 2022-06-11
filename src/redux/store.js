import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import catalogLoadReducer from './reducers/catalogLoadReducer'
import userReducer from './slices/userSlice';
import productLoadReducer from "./reducers/productLoadReducer";
import showSectionCategoryReducer from "./reducers/showSectionCategoryReducer";
import currentPageToShowReducer from "./reducers/currentPageToShowReducer";
import searchDataReducer from "./reducers/searchDataReducer";
import SearchShowReducer from "./reducers/showSearchReducer";
import InputTextSearchReducer from "./reducers/inputTextSearchReducer";
import showSearchResultsReducer from "./reducers/showSerchResultReducer";

const rootReducer = combineReducers({
    user: userReducer,
    catalogLoadReducer,
    productLoadReducer,
    showSectionCategoryReducer,
    currentPageToShowReducer,
    searchDataReducer,
    SearchShowReducer,
    InputTextSearchReducer,
    showSearchResultsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'productLoadReducer',]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);