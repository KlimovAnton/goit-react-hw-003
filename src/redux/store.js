import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
        contacts: contactsReducer,
        filters: filtersReducer,
        })

const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)


