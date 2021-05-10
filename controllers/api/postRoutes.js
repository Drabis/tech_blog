const { User, Comment, Blog } = require("../../models");
const router = require("express").Router();

// Dashboard needs to view aBlogs from the logged in user

router.get("/", async (req, res) => {
  try {
    const BlogsData = await Blog.findAll({
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
    const postsData = rawPostsData.map((post) => post.get({ plain: true }));
    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This will create a new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      userId: req.body.userId,
      blogContent: req.body.blogContent,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// To update using the id  

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        blogContent: req.body.blogContent,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//To delete the by the id 
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
