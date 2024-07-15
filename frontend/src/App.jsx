import React from "react";
import Header from "./Components/Header";
import Container from "./Container/Container";
import { Route, Routes, useNavigate } from "react-router-dom";
import ViewAllBooks from "./Container/ViewAllBooks";

function App() {
  const navigate = useNavigate();

  const handleViewAllBooks =()=>{
    navigate('/view_all_books');
  }

  return (
    <div className="full-page bg-slate-100">
      <div className="mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Container handleViewAllBooks={handleViewAllBooks}/>} />
          <Route path="/view_all_books" element={<ViewAllBooks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
