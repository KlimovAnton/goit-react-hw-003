import { createAction, createReducer, createSlice } from "@reduxjs/toolkit" 
import { nanoid } from "nanoid"

// export const addContact = createAction("contacts/addContact", (username, phone) => {
//     return {
//         payload: {
//             id: {nanoid}, name: username, number: phone,
//         }
//     }
// })

// export const deleteContact = createAction("deleteContact")

// export const contactsReducer = createReducer({
//     items: [
//         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]
//         }, (builder) => {
//             builder
//                 .addCase(addContact, (state, action) => {
//                     state.items.push(action.payload);
//                 })
//                 .addCase(deleteContact, (state, action) => {
//                     const index = state.items.findIndex((contact) => contact.id === action.payload);
//                     state.items.splice(index, 1);
//                 })
//         })

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]
            },
    reducers: {
        addContact: {
            reducer(state, action) {
              state.items.push(action.payload);
            },
            prepare: (username, phone) => {
              return {
                payload: {
                  id: nanoid(),
                  name: username, 
                  number: phone,
                },
              };
            },
          },

        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
              );
        },
    },
})

export const { addContact, deleteContact} = slice.actions;
export const contactsReducer = slice.reducer;


// export const addContact = (username, phone) => {
//     return {
//         type: "contacts/addContact",
//         payload: {
//             id: {nanoid}, name: username, number: phone,
//     }}
// }

// export const deleteContact = (contactId) => {
//     return {
//         type: "contacts/deleteContact",
//         payload: contactId,
//     }
// }

// export const contactsReducer = (state = {
//     items: [
//         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]
//         }, action) => {

//     switch (action.type) {

//         case "contacts/addContact": 
            // return { items: [
            //             ...state.items,
            //             action.payload
            //         ]
            // }
            
//         case "contacts/deleteContact":
            // return {
            //     ...state, 
            //     items: state.items.filter(contact => contact.id !== action.payload)
            // }

//         default:
//             return state;
//     }
// }