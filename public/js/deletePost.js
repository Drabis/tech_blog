const deleteBlog = async (event) => {
  event.preventDefault();

  const blog_id = document.getElementById("delete-post").value;

  const response = await fetch(`/api/blogs/${blog_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete blog.");
  }
};

document.getElementById("delete-post").addEventListener("click", deleteBlog);
