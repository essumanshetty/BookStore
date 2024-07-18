import React from "react";
import SnackBar from "../Components/SnackBar";
import { Link, useNavigate } from "react-router-dom";
import useSnackBar from "../hooks/useSnackBar";
const url = import.meta.env.VITE_API_URL;

export default function ViewAllBooks() {
  const [books, setBooks] = React.useState([]);
  const [showSnackBar, message, setMessageHandler, toggleShowSnackBar] = useSnackBar();
  const navigate = useNavigate();
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
        setMessageHandler("Something Went wrong.....");
        toggleShowSnackBar(true);
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
      setMessageHandler(data.message);
      toggleShowSnackBar(true);
      getAllBooks()(); //After Successsfull Deletion Show Updated Book List
    } catch (error) {
      console.log(error);
      setMessageHandler("Something Went Wrong....");
      toggleShowSnackBar(true);
    }
  };

  const handleEdit =(id, title, author, year)=>{
    navigate(`/edit_book?id=${id}&titleb=${title}&authorb=${author}&yearb=${year}`)
  }

  if (!books || books.length === 0) return <div>No Books Found</div>;

  return (
    <div className="m-2">
      <SnackBar
        showSnackBar={showSnackBar}
        toggleShowSnackBar={toggleShowSnackBar}
        message={message}
        setMessage={setMessageHandler}
      />
      <div className="flex justify-between py-5">
        <h3 className="text-2xl ml-1">View All Books</h3>
        <Link
          to="/add_book"
          className="rounded-md px-3 py-2 text-sm bg-gray-900  font-medium hover:bg-gray-500 text-white"
        >
          Add Book
        </Link>
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
                <button className="mr-5 text-indigo-500 hover:text-xl"
                  onClick={()=>handleEdit(book._id, book.title, book.author, book.publishYear)}
                >
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
