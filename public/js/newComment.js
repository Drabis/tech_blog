    const createComment = async (event) => {
      event.preventDefault();

      const content = document.getElementById("comment-text").value;
      const url = window.location.href;
      const split_url = url.split("blogs/");
      
      const blog_id = split_url[1][0];
      
      const user_id = document
        .getElementById("user")
        .getAttribute("data-currentuser");

      const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: JSON.stringify({ user_id, blog_id, content }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to create comment.");
      }
    };

    document
      .getElementById("submit-comment")
      .addEventListener("click", createComment);
