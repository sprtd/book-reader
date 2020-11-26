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
            <div>
                {author}
            </div>

            <div>
                {title}
            </div>

            <div>
                {!isComplete ? <CheckBoxOutlineBlankIcon onClick={handleTick}/> :  <CheckBoxOutlinedIcon onClick={handleTick} /> }
            </div>

            <div>
                <DeleteOutlineIcon onClick={handleRemove} />
            </div>
          </li>  
        </>
    )
}

export default BookList
