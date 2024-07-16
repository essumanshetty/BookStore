export default function AddBook() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const author = event.target[1].value;
    const year = event.target[2].value;
    console.log(title, author, year);
  };
  return (
    <>
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
