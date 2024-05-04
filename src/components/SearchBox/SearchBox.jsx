import { useSelector } from "react-redux"
import css from "./SearchBox.module.css"

export default function SearchBox () {
    
    const handleChange = (evt) => {
        console.log(evt.target.value)
    }
    
    return  (
        <div className={css.searchContainer}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input} type="text" onChange={handleChange} />
        </div>
    )
}