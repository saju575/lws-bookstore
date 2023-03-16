import React from "react";
import TextInput from "../ui/TextInput";

const Form = () => {
  return (
    <form class="book-form">
      <TextInput
        htmlFor={"lws-bookName"}
        label="Book Name"
        required
        class="text-input"
        type="text"
        id="lws-bookName"
        name="name"
      />
      <TextInput
        htmlFor={"lws-author"}
        label="Author"
        required
        class="text-input"
        type="text"
        id="lws-author"
        name="author"
      />
      <TextInput
        htmlFor={"lws-thumbnail"}
        label="Image Url"
        required
        class="text-input"
        type="text"
        id="lws-thumbnail"
        name="thumbnail"
      />

      <div class="grid grid-cols-2 gap-8 pb-4">
        <TextInput
          htmlFor={"lws-price"}
          label="Price"
          required
          class="text-input"
          type="number"
          id="lws-price"
          name="price"
        />
        <TextInput
          htmlFor={"lws-rating"}
          label="Rating"
          required
          class="text-input"
          type="number"
          id="lws-rating"
          name="rating"
          min="1"
          max="5"
        />
      </div>

      <div class="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
        />
        <label for="lws-featured" class="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
    </form>
  );
};

export default Form;
