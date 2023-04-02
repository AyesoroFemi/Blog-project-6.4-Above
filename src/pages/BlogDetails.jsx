import React from "react";
import {
  json,
  Link,
  redirect,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

function BlogDetails() {
  const singlePost = useLoaderData();
  const submit = useSubmit();

  function deleteHandler() {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <div className="border-2 w-full">
          <img className="w-[100%] h-[300px]" src={singlePost.image} alt="" />
        </div>
        <h1 className="text-2xl font-semibold py-2">{singlePost.title}</h1>
        <p>{singlePost.date}</p>
        <p>{singlePost.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Link
          className="py-1 px-4 rounded-md font-semibold border-[2px] border-red-900"
          to="/"
        >
          Back
        </Link>
        <button
          className="py-1 px-4 rounded-md font-semibold border-[2px] border-red-900"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const id = params.blogId;

  const response = await fetch(`http://localhost:3000/blogs/${id}`);
  console.log(response);

  if (!response.ok) {
    throw json({ message: "Could not load single blog post" }, { status: 500 });
  }
  return response;
}

export default BlogDetails;

export async function action({ request, params }) {
  const id = params.blogId;
  const response = await fetch(`http://localhost:3000/blogs/${id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete blog" }, { status: 500 });
  }
  return redirect("/");
}
