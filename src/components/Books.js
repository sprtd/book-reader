import {useContext} from 'react'
import { BookContext } from '../contexts/BookContextProvider'
import BookList from './BookList'

const Books = () => {
    const {books, dispatch } = useContext(BookContext)
    return books.length ? (
        <div className='content '> 
            <ul className='list'>
                {books.map(book => 
                    <BookList key={book.id} book={book} dispatch={dispatch} />)}
            </ul>
        </div>
    ) : (
        <div className='warning'>
            <p>No book added yet</p>
        </div>

    )
}

export default Books
