import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import ACTION from '../actions'



const BookList = ({book, dispatch}) => {
    
    const {id, title, author, isComplete} = book


    const handleTick = () => {
        dispatch({type: ACTION.TICK_BOOK, payload: {id: id}})
    }

    const handleRemove = () => {

        dispatch({type: ACTION.REMOVE_BOOK, id: id })
    }

    return (
        <>
          <li className='list-items' > 
            <div className='author'  style={{color: isComplete ? 'red' : '#ddd' }} >
                {author}
            </div>

            <div className='title' style={{color: isComplete ? 'red' : '#ddd' }}  >
                {title}
            </div>

            <div className='status'> 
                {!isComplete ? <CheckBoxOutlineBlankIcon onClick={handleTick} className='tick' style={{color: isComplete ? 'red' : '#ddd' }}  /> :  <CheckBoxOutlinedIcon onClick={handleTick} className='tick'  style={{color: isComplete ? 'red' : '#ddd' }}  /> }
            </div>

            <div className='delete' >
                <DeleteOutlineIcon onClick={handleRemove} />
            </div>
          </li>  
        </>
    )
}

export default BookList
