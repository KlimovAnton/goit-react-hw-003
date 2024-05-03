import css from "./SearchBox.module.css"

export default function SearchBox ({ value, onFilter }) {

    const handleChange = (evt) => {
        onFilter(evt.target.value)
    }
    
    return  (
        <div className={css.searchContainer}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input} type="text" value={value} onChange={handleChange} />
        </div>
    )
}