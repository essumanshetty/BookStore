import React from "react";

export default function ViewAllBooks() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    async function fetchAllBooks() {
      try {
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(`${url}/books/all_books/`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  }, []);

  if (!books || books.length === 0) return <div>No Books Found</div>;

  return (
    <div className="m-2">
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
                <button className="mr-5 text-indigo-500"><i className="fa-regular fa-pen-to-square"></i></button>
                <button className="text-red-500"><i className="fa-regular fa-trash-can" color="red" ></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
