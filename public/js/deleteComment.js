const deleteComment = async (event) => {
  event.preventDefault();

  const commentId = event.target.getAttribute("data-commentid");
  console.log(commentId);
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete comment.");
  }
};
document.querySelectorAll(".delete-comment").forEach((comment) => {
  comment.addEventListener("click", deleteComment);
});
