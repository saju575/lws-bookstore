import React from "react";
import Form from "./Form";

const AddBook = () => {
  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <Form />
    </div>
  );
};

export default AddBook;
