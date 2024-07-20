import React from "react";
import Header from "./Components/Header";
import Container from "./Container/Container";
import { Route, Routes, useNavigate } from "react-router-dom";
import ViewAllBooks from "./Container/ViewAllBooks";
import AddBook from "./Container/AddBook";
import EditBook from './Container/EditBook';
const url = import.meta.env.VITE_API_URL;

function App() {
  const navigate = useNavigate();

  const handleViewAllBooks = () => {
    navigate("/view_all_books");
  };


  //Just hits the backend server, noticed server taking longer than usual
  React.useEffect(()=>{
    async function hitTheServer(){
      try {
        const response = await fetch(`${url}/`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error) 
      }
    }
    hitTheServer(); 
  },[1]); //Execute only once, 

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
