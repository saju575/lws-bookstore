import React from "react";
import Books from "../components/bookList/Books";

const Home = () => {
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <div class="flex items-center justify-between mb-12">
          <h4 class="mt-2 text-xl font-bold">Book List</h4>

          <div class="flex items-center space-x-4">
            <button class="lws-filter-btn active-filter">All</button>
            <button class="lws-filter-btn">Featured</button>
          </div>
        </div>
        <Books />
      </div>
    </main>
  );
};

export default Home;
