import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Home() {
  const blogs = useLoaderData();

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            className="rounded-xl bg-white shadow-md"
            key={blog.id}
          >
            <div>
              <img className="rounded-t-xl" src={blog.image} alt="blog-image" />
            </div>
            <div className="p-4">
              <Link to={`/${blog.id}`}>
                <h1 className="text-2xl font-semibold py-2">{blog.title}</h1>
                <p>{blog.date}</p>
                <p>{blog.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

export async function loader() {
  const response = await fetch("http://localhost:3000/blogs");
  return response;
}
