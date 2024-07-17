import React from "react";
import useSnackBar from "../hooks/useSnackBar";
import SnackBar from "../Components/SnackBar";

export default function AddBook() {
  const [showSnackBar, message, setMessageHandler, toggleShowSnackBar] =
    useSnackBar();
  const [bookData, setBookData] = React.useState({
    title: "",
    author: "",
    year: "",
  });
  const { title, author, year } = bookData; //Destructure from state

  //Update state variable with handler
  const handleInputData = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  //API Call to Create a Book
  async function createBook(formData) {
    try {
      const url = import.meta.env.VITE_API_URL;
      const response = await fetch(`${url}/books/create_new`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await response.json();
      setMessageHandler("Book Created Successfully...");
      toggleShowSnackBar(true);
    } catch (error) {
      console.log(error);
      setMessageHandler("Something went wrong.....");
      toggleShowSnackBar(true);
    }
  }

  //Validate Inputs
  function validateInputs() {
    if (!title || !author || !year) {
      setMessageHandler("Please Check Your Inputs.....");
      toggleShowSnackBar(true);
      return;
    }

    if (year?.length !== 4) {
      setMessageHandler("Year should be 4 digit");
      toggleShowSnackBar(true);
      return;
    }

    //If all the validation holds good, call api
    createBook({
      title: title,
      author: author,
      publishYear: Number(year),
    });
  }

  //On SUbmit validate input and get values of form
  const onSubmitHandler = (event) => {
    event.preventDefault();
    validateInputs();
  };

  return (
    <>
      <SnackBar
        showSnackBar={showSnackBar}
        toggleShowSnackBar={toggleShowSnackBar}
        message={message}
        setMessage={setMessageHandler}
      />
      <div className="justify-center">
        <div className="mt-8 px-10 py-10 sm:mx-auto border-2 shadow-2xl sm:max-w-sm bg-white">
          <div className="">
            <h2 className="pb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Enter Book Details
            </h2>
          </div>
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Book Title
              </label>
              <div className="mt-2">
                <input
                  value={title}
                  onChange={handleInputData}
                  id="title"
                  name="title"
                  type="text"
                  required
                  autoComplete="false"
                  title="Name of the book, Example: I too had a love story"
                  className=" w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="author"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Author
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={author}
                  onChange={handleInputData}
                  id="author"
                  name="author"
                  type="text"
                  required
                  autoComplete="false"
                  title="Who wrote the Book, Example: John Deer"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="year"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year of Publish
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={year}
                  onChange={handleInputData}
                  id="year"
                  name="year"
                  type="number"
                  required
                  autoComplete="false"
                  title="Year of Publish, Example:2021"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 
                text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
