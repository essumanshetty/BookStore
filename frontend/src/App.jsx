import React from "react";
import Header from "./Components/Header";
import Container from "./Components/Container/Container";

function App() {
  return (
    <div className="full-page bg-slate-100">
      <div className="mx-auto">
        <Header />
        <Container/>
      </div>
    </div>
  );
}

export default App;
