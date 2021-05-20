const router = require("express").Router();
const { Blog } = require("../models");
const checkAuth = require("../utils/auth");

// This will get the user by id, and display all the blog posts they've made.
router.get("/", checkAuth, async (req, res) => {
  console.log(req.session);
  try {
    const userSpecificPosts = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    console.log(userSpecificPosts);
    const usersPosts = userSpecificPosts.map((post) => {
      post.get({ plain: true });
    });
    console.log(usersPosts);
    res.status(200).render("dashboard", {
      usersPosts,
      logged_in: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
