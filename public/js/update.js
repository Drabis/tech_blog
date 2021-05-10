const updatePost = async (event) => {
  event.stopPropagation();

  const postId = event.target.getAttribute("data-postid");
  const blogContent = document.querySelector(`.blog-title-${postId}`)
    .textContent;
  const response = await fetch(`/api/posts/${postId}`, {
    method: "PUT",
    body: JSON.stringify({ blogContent }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to update post.");
  }
};

document.querySelectorAll(".update-post").forEach((post) => {
  post.addEventListener("click", updatePost);
});