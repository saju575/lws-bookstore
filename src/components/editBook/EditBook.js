import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Form from "./Form";

const EditBook = () => {
  const { bookId } = useParams();
  const { isLoading, isError, error, data: book } = useGetBookQuery(bookId);

  //what to rander
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error.message} />;
  }

  if (!isLoading && !isError && book?.id) {
    content = <Form book={book} />;
  }
  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  );
};

export default EditBook;
