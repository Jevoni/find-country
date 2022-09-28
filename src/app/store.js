import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../services/countrySlice";
import searchSlice from "../services/searchSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, searchSlice)

export const store = configureStore({
    reducer: {
        search: persistedReducer,
        country: countrySlice
    },
    middleware: [thunk]
})

export const persistor = persistStore(store)