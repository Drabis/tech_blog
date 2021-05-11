const updateComment = async (event) => {
  event.preventDefault();

  const currentUserId = document
    .querySelector(".user-profile")
    .getAttribute("data-currentuser");
  console.log(currentUserId);
  const commentUserId = event.target.getAttribute("data-userid");
  console.log(commentUserId);
  const commentId = event.target.getAttribute("data-commentid");
  const commentContent = document.querySelector(`.input-content-${commentId}`)
    .textContent;
  if (currentUserId !== commentUserId) {
    return alert("You cannot edit another user's comments!");
  }
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    body: JSON.stringify({ commentContent }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to update comment.");
  }
};
document.querySelectorAll(".update-comment").forEach((comment) => {
  comment.addEventListener("click", updateComment);
});
