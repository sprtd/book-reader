import {useContext} from 'react'
import { BookContext } from '../contexts/BookContextProvider'

const Navbar = () => {
    const {books} = useContext(BookContext)

    
    return (
        <nav>
            <h2>Book Reader App</h2>
            {books.length > 1 ? <span>Added Books:</span> : <span>Added Book:</span> }
            <span>{books.length} </span>
        </nav>
    )
}

export default Navbar
