import { useSelector } from "react-redux"
import { statusFilter } from "../../redux/filtersSlice"
import { Button } from "../Button/Button"
import css from "./SearchBox.module.css"

// export default function SearchBox ({ value, onFilter }) {
    
//     const handleChange = (evt) => {
//         onFilter(evt.target.value)
//     }
//     console.log(value)
    
//     return  (
//         <div className={css.searchContainer}>
//             <label className={css.label}>Find contacts by name</label>
//             <input className={css.input} type="text" value={value} onChange={handleChange} />
//         </div>
//     )
// }


export default function SearchBox () {

    const filter = useSelector(state => state.filters.name)
    console.log(filter)

    return (
        <div>
            <Button 
                selected={filter === statusFilter.all}>
                All
            </Button>
            <Button 
                selected={filter === statusFilter.active}>
                Active
            </Button>
            <Button 
                selected={filter === statusFilter.completed}>
                Completed
            </Button>
        </div>
    )
}
