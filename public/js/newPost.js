const createBlog = async (event) => {
  event.preventDefault();

  const title = document.getElementById("blog-title").value;
  console.log(title);
  const content = document.getElementById("blog-content").value;

  const response = await fetch("/api/blogs/", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create blog.");
  }
};

document.getElementById("submit-blog").addEventListener("click", createBlog);
