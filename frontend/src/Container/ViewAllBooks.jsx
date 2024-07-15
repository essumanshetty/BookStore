import React from "react";
import SnackBar from "../Components/SnackBar";
const url = import.meta.env.VITE_API_URL;

export default function ViewAllBooks() {
  const [books, setBooks] = React.useState([]);
  const [showSnackBar, setShowSnackBar] = React.useState(false);
  const [message, setMessage] = React.useState('');

  //Show and Hide SnackBar, user messgae
  const toggleShowSnackBar =(show)=>{
    setShowSnackBar(show);
    setTimeout(() => {
      setShowSnackBar(false); //Close SnackBar after 2seconds
      setMessage('')  //Reset Error Message
    }, 2000);
  }

  //Use use callback to memoize function
  const getAllBooks = React.useCallback(() => {
    //Get All Books from DB
    return async function fetchAllBooks() {
      try {
        const response = await fetch(`${url}/books/all_books/`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  React.useEffect(() => {
    getAllBooks()();
  }, []);

  //Delete a Book in DB
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${url}/books/delete_book/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setMessage(data.message); 
      toggleShowSnackBar(true);
      getAllBooks()();  //After Successsfull Deletion Show Updated Book List
    } catch (error) {
      console.log(error);
    }
  };

  if (!books || books.length === 0) return <div>No Books Found</div>;

  return (
    <div className="m-2">
      <SnackBar
        showSnackBar ={showSnackBar}
        toggleShowSnackBar = {toggleShowSnackBar}
        message = {message}
        setMessage ={setMessage}
      />
      <div className="py-5">
        <h3 className="text-2xl ml-1">View All Books</h3>
      </div>
      <table className="bg-white border-2">
        <thead className="bg-indigo-300">
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Year of Publish</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <button className="mr-5 text-indigo-500 hover:text-xl">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button
                  className="text-rose-500 hover:text-xl"
                  onClick={() => handleDelete(book._id)}
                >
                  <i className="fa-regular fa-trash-can" color="red"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
