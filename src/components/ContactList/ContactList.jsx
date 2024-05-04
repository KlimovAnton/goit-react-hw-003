import { useSelector } from "react-redux"
import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactList.module.css"

// export default function ContactList ({ tasks, onDelete }) {
//     return (
//         <ul className={css.list}>
//             {tasks.map((task) => (
//             <li className={css.item} key={task.id}>
//                 <ContactItem task={task} onDelete={onDelete} />
//             </li>
//             ))
//             }
//         </ul>
//     )
// }

export default function ContactList () {
    
    const contacts = useSelector(state => state.items)

    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
                <ContactItem contact={contact} />
            </li>
            ))
            }
        </ul>
    )
}
