import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Book from "./Book";

const Books = () => {
  const { isLoading, isError, error, data: books } = useGetBooksQuery();
  const { tag, search } = useSelector((state) => state.filter);

  // what to rander
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error.message} />;
  }
  if (!isLoading && !isError && books.length === 0) {
    content = <Error message={"No books found"} />;
  }
  if (!isLoading && !isError && books.length > 0) {
    const copyBook = books
      .filter((book) => {
        if (search) {
          return book.name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      })
      .filter((book) => {
        if (tag === "featured") {
          return book.featured;
        }
        return true;
      });
    if (copyBook.length > 0) {
      content = copyBook.map((book) => <Book key={book.id} book={book} />);
    } else {
      content = <Error message={"No book found! "} />;
    }
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
