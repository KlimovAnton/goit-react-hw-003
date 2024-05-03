import { nanoid } from "nanoid"

export const addContact = (username, phone) => {
    return {
        type: "contacts/addContact",
        payload: {
            id: {nanoid}, name: username, number: phone,
    }}
}

export const deleteContact = (contactId) => {
    return {
        type: "contacts/deleteContact",
        payload: contactId,
    }
}
