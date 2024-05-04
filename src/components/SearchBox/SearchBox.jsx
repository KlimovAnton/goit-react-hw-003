import { useDispatch, useSelector } from "react-redux"
import css from "./SearchBox.module.css"
import { filtersSlice } from "../../redux/filtersSlice"
import { filterContact } from "../../redux/contactsSlice"

export default function SearchBox () {
    const value = useSelector(state => state.filters.name)
    const contacts = useSelector(state => state.contacts.items)

    const showContact = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()));

    const dispatch = useDispatch()
    dispatch(filterContact(showContact))
    const selectNameFilter  = (evt) => dispatch(filtersSlice(evt.target.value))
    
    return  (
        <div className={css.searchContainer}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input} type="text" onChange={selectNameFilter} />
        </div>
    )
}