const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

// We grab only the username and comment content from this?
router.get("/", async (req, res) => {
  try {
    const postsData = await Blog.findAll({
      include: [User]
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in, // logged in status from the session object
      userId: req.session.user_id, // user id from the session object
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// This is a placeholder, and will need the login page to be rendered.
router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(400).json(err);
  }
});
// This is a placeholder, and will need the create account page.
router.get("/signup", async (req, res) => {
  try {
    res.status(200).render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

// This is a placeholder, and will need the logout page to be rendered.
router.get("/logout", async (req, res) => {
  try {
    res.status(200).render("logout");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
