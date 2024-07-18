import React from "react";
import Header from "./Components/Header";
import Container from "./Container/Container";
import { Route, Routes, useNavigate } from "react-router-dom";
import ViewAllBooks from "./Container/ViewAllBooks";
import AddBook from "./Container/AddBook";
import EditBook from './Container/EditBook';

function App() {
  const navigate = useNavigate();

  const handleViewAllBooks = () => {
    navigate("/view_all_books");
  };

  return (
    <div className="container full-page">
      <div className="header-section">
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Container handleViewAllBooks={handleViewAllBooks} />}
          />
          <Route path="/view_all_books" element={<ViewAllBooks />} />
          <Route path="/add_book" element={<AddBook />} />
          <Route path="/edit_book" element={<EditBook/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
