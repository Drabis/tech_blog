const deleteBlog = async (event) => {
  event.preventDefault();

  const blog_id = document.querySelectorAll(".delete-post").value;

  const response = await fetch(`/api/blogs/${blog_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete blog.");
  }
};

document.querySelectorAll(".delete-post").addEventListener("click", deleteBlog);
