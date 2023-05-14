import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import CategoriesSlice from "./categories/CategoriesSlice";

const reducers = combineReducers({
  categories: CategoriesSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const presistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: presistedReducer,
});

export const persistor = persistStore(store);
