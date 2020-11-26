import  { useReducer, createContext, useEffect } from 'react'
import bookReducer from '../reducers/bookReducer'


export const BookContext = createContext()

const BookContextProvider = ({children}) => {
    const [books, dispatch ] = useReducer(bookReducer, [], () => {
        const storedEntry = localStorage.getItem('finalBooks')
            return storedEntry ? JSON.parse(storedEntry) : []
    })

    useEffect(() => {
        localStorage.setItem('finalBooks', JSON.stringify(books))
        

    }, [books])


    return (
       <BookContext.Provider value={{books, dispatch}}>
        {children}
       </BookContext.Provider>
    )
}

export default BookContextProvider
