import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./PopupReducer/reduser";
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
	popup: popupReducer
})

export const store = configureStore({
	reducer:rootReducer
})

export type GlobalStoreStateType = ReturnType<typeof store.getState>
export type GlobalStoreDispatchType = typeof store.dispatch