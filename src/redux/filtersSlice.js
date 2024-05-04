// export const getContacts = (state) => state.contacts

// export const getStatusFilter = (state) => state.contacts.status;

export const filtersSlice = (name) => {
    return {
        type: "filters/filtersSlice",
        payload: name
    }
}

export const filtersReducer = (state = {
        name: ""
    }, action) => {

    switch(action.type) {

        case "filters/filtersSlice":
        return { name: action.payload }
        
        default:
            return state;
    }
}