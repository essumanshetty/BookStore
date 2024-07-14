import React from "react";

function Container(props) {
  const {handleViewAllBooks} = props;
  return (
    <div className="hero flex grow items-center justify-center text-white">
      <div className="flex flex-col items-center p-2">
        <h3 className="text-4xl subpixel-antialiased font-serif">
          Welcome to Book Store
        </h3>
        <button
          className="mt-4 bg-indigo-600 hover:bg-indigo-500
        rounded-lg py-2 px-8 
        "
        onClick={handleViewAllBooks}
        >
          View All Books
        </button>
      </div>
    </div>
  );
}

export default Container;
