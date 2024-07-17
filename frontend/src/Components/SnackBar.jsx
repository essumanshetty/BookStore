import React from "react";

function SnackBar(props) {
  const { showSnackBar, toggleShowSnackBar, message } = props;
  return (
    <>
      {showSnackBar && (
        <div
          className="alert bg-black text-white py-3 px-3
     flex justify-between shadow-xl rounded"
        >
          <p>{message}</p>
          <button className="hover:text-xl" onClick={()=>toggleShowSnackBar(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </>
  );
}

export default SnackBar;
