import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactList.module.css"

export default function ContactList ({ tasks, onDelete }) {
    return (
        <ul className={css.list}>
            {tasks.map((task) => (
            <li className={css.item} key={task.id}>
                <ContactItem task={task} onDelete={onDelete} />
            </li>
            ))
            }
        </ul>
    )
}

