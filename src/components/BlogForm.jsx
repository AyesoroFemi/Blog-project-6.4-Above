import React from "react";
import { Form } from "react-router-dom";

function BlogForm() {
  return (
    <div className="max-w-screen-md mx-auto mt-20 bg-[#F3FBFB] p-8 rounded-xl">
      <Form method="post">
        <div className="my-4">
          <label className="font-semibold" htmlFor="">
            Title
          </label>
          <input
            className="block border-2 outline-none w-full py-1 px-2 border-gray-400"
            type="text"
            name="title"
          />
        </div>
        <div className="my-4">
          <label className="font-semibold" htmlFor="">
            Image
          </label>
          <input
            className="block border-2 outline-none w-full py-1 px-2 border-gray-400"
            type="url"
            name="image"
          />
        </div>
        <div className="my-4">
          <label className="font-semibold" htmlFor="">
            Date
          </label>
          <input
            className="block border-2 outline-none w-full py-1 px-2 border-gray-400"
            type="date"
            name="date"
          />
        </div>
        <div className="my-4">
          <label className="font-semibold" htmlFor="">
            Description
          </label>
          <textarea
            className="block border-2 outline-none w-full py-1 px-2 border-gray-400"
            name="description"
            type="text"
          ></textarea>
        </div>
        <button className="text-center my-4 w-full py-1 border-2 border-gray-400 font-semibold" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default BlogForm;
