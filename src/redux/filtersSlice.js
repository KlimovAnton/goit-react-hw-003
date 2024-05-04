// export const filtersSlice = (name) => {
//     return {
//         type: "filters/filtersSlice",
//         payload: name
//     }
// }

import { createSlice } from "@reduxjs/toolkit";

// export const filtersReducer = (state = {
//         name: ""
//     }, action) => {

//     switch(action.type) {

//         case "filters/filtersSlice":
//         return { name: action.payload }
        
//         default:
//             return state;
//     }
// }

const slice = createSlice({
    name: "filters",
    initialState: {
        name: "",
    },
    reducers: {
        filtersSlice: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { filtersSlice } = slice.actions;
export const filtersReducer = slice.reducer;