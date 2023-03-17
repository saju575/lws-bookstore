import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "../components/bookList/Books";
import { tagFilter } from "../features/filters/filtersSlice";

const Home = () => {
  const { tag } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className={`lws-filter-btn ${tag === "all" && "active-filter"}`}
              onClick={() => dispatch(tagFilter("all"))}
            >
              All
            </button>
            <button
              className={`lws-filter-btn ${
                tag === "featured" && "active-filter"
              }`}
              onClick={() => dispatch(tagFilter("featured"))}
            >
              Featured
            </button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
};

export default Home;
