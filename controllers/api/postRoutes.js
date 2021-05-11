const { User, Comment, Blog } = require("../../models");
const router = require("express").Router();

// Dashboard needs to view aBlogs from the logged in user

router.get("/", async (req, res) => {
  try {
    const blogsData = await Blog.findAll({
      include: [
        {
          model: User,
          as: "post_creator",
          attributes: ["username"],
        },
        {
          model: Comment,
          as: "post_comments",
          include: {
            model: User,
            as: "comment_creator",
            attributes: ["username"],
          },
        },
      ],
    });
    const blogData = rawBlogData.map((blog) => blog.get({ plain: true }));
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This will create a new blog
router.post("/", async (req, res) => {
  try {
    const newblog = await Blog.create({
      userId: req.body.userId,
      blogContent: req.body.blogContent,
    });
    res.status(200).json(newblog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// To update using the id  

router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        blogContent: req.body.blogContent,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//To delete the by the id 
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
