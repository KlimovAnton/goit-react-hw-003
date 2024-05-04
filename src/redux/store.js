import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
//   })

// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReducer, enhancer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  }
})

