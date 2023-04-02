import React from "react";
import { json, redirect } from "react-router-dom";
import BlogForm from "../components/BlogForm";

function Create() {
  return (
    <div>
      <BlogForm />
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const blogData = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  console.log(blogData)

  const response = await fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });


  if (!response.ok) {
    throw json(
      { message: "Could not save blog post content" },
      { status: 500 }
    );
  }

  return redirect("/");
}

export default Create;
