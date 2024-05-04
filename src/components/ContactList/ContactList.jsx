import { useSelector } from "react-redux"
import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactList.module.css"

export default function ContactList () {

    const contacts = useSelector(state => state.contacts.items)
    console.log(contacts)
    const value = useSelector(state => state.filters.name)
    console.log(value)

    const showContact = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()));

    return (
        <ul className={css.list}>
            {showContact.map((contact) => (
            <li className={css.item} key={contact.id}>
                <ContactItem contact={contact} />
            </li>
            ))
            }
        </ul>
    )
}
