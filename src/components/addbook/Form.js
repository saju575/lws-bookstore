import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddbookMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import TextInput from "../ui/TextInput";

const Form = () => {
  const [addbook, { isLoading, isError, isSuccess, error }] =
    useAddbookMutation();
  const [inputFieldValue, setInputFieldValue] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const navigate = useNavigate();
  const resetForm = () => {
    setInputFieldValue({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };
  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    addbook({
      ...inputFieldValue,
      price: Number(inputFieldValue.price),
      rating: Number(inputFieldValue.rating),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      navigate("/");
    }
  }, [navigate, isSuccess]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <TextInput
        htmlFor={"lws-bookName"}
        label="Book Name"
        required
        className="text-input"
        type="text"
        id="lws-bookName"
        name="name"
        value={inputFieldValue.name}
        onChange={(e) =>
          setInputFieldValue({ ...inputFieldValue, name: e.target.value })
        }
      />
      <TextInput
        htmlFor={"lws-author"}
        label="Author"
        required
        className="text-input"
        type="text"
        id="lws-author"
        name="author"
        value={inputFieldValue.author}
        onChange={(e) =>
          setInputFieldValue({ ...inputFieldValue, author: e.target.value })
        }
      />
      <TextInput
        htmlFor={"lws-thumbnail"}
        label="Image Url"
        required
        className="text-input"
        type="text"
        id="lws-thumbnail"
        name="thumbnail"
        value={inputFieldValue.thumbnail}
        onChange={(e) =>
          setInputFieldValue({ ...inputFieldValue, thumbnail: e.target.value })
        }
      />

      <div className="grid grid-cols-2 gap-8 pb-4">
        <TextInput
          htmlFor={"lws-price"}
          label="Price"
          required
          className="text-input"
          type="number"
          id="lws-price"
          name="price"
          value={inputFieldValue.price}
          onChange={(e) =>
            setInputFieldValue({
              ...inputFieldValue,
              price: e.target.value,
            })
          }
        />
        <TextInput
          htmlFor={"lws-rating"}
          label="Rating"
          required
          className="text-input"
          type="number"
          id="lws-rating"
          name="rating"
          min="1"
          max="5"
          value={inputFieldValue.rating}
          onChange={(e) =>
            setInputFieldValue({
              ...inputFieldValue,
              rating: e.target.value,
            })
          }
        />
      </div>

      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          value={inputFieldValue.featured}
          onChange={(e) =>
            setInputFieldValue({
              ...inputFieldValue,
              featured: e.target.checked,
            })
          }
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button
        type="submit"
        className="submit"
        id="lws-submit"
        disabled={isLoading}
      >
        Add Book
      </button>
      {isError && <Error message={error.message} />}
    </form>
  );
};

export default Form;
