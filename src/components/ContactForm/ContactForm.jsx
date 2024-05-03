import { Formik, Form, Field, ErrorMessage } from "formik"
import { useId } from "react"
import css from "./ContactForm.module.css"

export default function ContactForm ({ validation, initial, onAdd }) {
    
    const nameId = useId()
    const phoneId = useId()

    const handleSubmit = (values, actions) => {
        onAdd({
            id: Date.now(),
            name: values.username,
            number: values.phone
        })
        actions.resetForm()
    }

    return (
        <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={validation}>
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name</label>
                <Field type="text" name="username" id={nameId} className={css.input}/>
                <ErrorMessage className={css.error} name="username" component="span" />
                
                <label htmlFor={phoneId} className={css.label}>Phone</label>
                <Field type="tel" name="phone" id={phoneId} className={css.input}/>
                <ErrorMessage className={css.error} name="phone" component="span" />

                <button type="submit" className={css.button}>Add contact</button>
            </Form>
        </Formik>
    )
}