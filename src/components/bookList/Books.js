import React from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Book from "./Book";

const Books = () => {
  const { isLoading, isError, error, data: books } = useGetBooksQuery();

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
    content = books.map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
