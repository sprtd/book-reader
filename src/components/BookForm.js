import { useContext, useState } from 'react'
import ACTION from '../actions'
import { BookContext } from '../contexts/BookContextProvider'
import {v4 as uuidv4 } from 'uuid'


const BookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [inputEntry, setInputEntry] = useState({
        title: '',
        author: ''

    })
    const {title: titleEntry, author: authorEntry} = inputEntry

    //handleChane
    const handleChange = event => {
        const {name, value} = event.target
        setInputEntry({...inputEntry, [name]: value} )
    }

    // handleAdd
    const handleSubmit = event => {
        event.preventDefault()
        dispatch({type: ACTION.ADD_BOOK, payload:{id: uuidv4(), title: titleEntry, author: authorEntry}})
        setInputEntry({
            title: '',
            author: ''
        })
    }
   

    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <input  placeholder='Enter title' onChange={handleChange}  name='title'  value={titleEntry} autoFocus />
                <input  placeholder='Enter author'  onChange={handleChange}  name='author' value={authorEntry}  />
                <button>Add Book</button>

            </form>
        </div>
    )
}

export default BookForm
