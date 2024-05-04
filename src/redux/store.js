import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contactsValue',
  storage,
  whitelist: ["items"],
}

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
//   })

// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReducer, enhancer)

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
