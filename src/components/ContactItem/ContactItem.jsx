import css from "./ContactItem.module.css"

export default function ContactItem ({ task: { id, name, number }, onDelete })  {
    return (
        <>
            <div>
                <p className={css.text}>
                    {name}
                </p>
                <p className={css.text}>
                    {number}
                </p>
            </div>
            <div>
                <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </>
    )
}