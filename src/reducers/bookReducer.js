import ACTION from '../actions'

const bookReducer = (state, action) => {
    switch(action.type) {
        case ACTION.ADD_BOOK:
            return [...state, 
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    author: action.payload.author,
                    isComplete: false
                }
            ]

        case ACTION.REMOVE_BOOK: 
            return state.filter(book => book.id !== action.id)

        case ACTION.TICK_BOOK: 
            return state.map(book => {
                if(book.id === action.payload.id) {
                    return {...book, isComplete: !book.isComplete }
                } 
                return book
            })
        default: 
            return state
    }
}

export default bookReducer