import BookContextProvider from '../contexts/BookContextProvider'
import Books from '../components/Books'
import Navbar from '../components/Navbar'
import BookForm from './BookForm'

function App() {
  return (
    <div className="container">
      <BookContextProvider>
        <Navbar />
        <Books />
        <BookForm />
        
      </BookContextProvider>
     
    </div>
  );
}

export default App;
