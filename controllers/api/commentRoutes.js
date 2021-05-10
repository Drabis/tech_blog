const { Comment } = require("../../models");
const router = require("express").Router();

// Creating a new comment
router.post("/:userid/:postid", async (req, res) => {
  try {
    const newComment = await Comment.create({
      userId: req.params.userid,
      postId: req.params.postid,
      commentContent: req.body.commentContent,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// This update a comment by its specific id
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        commentContent: req.body.commentContent,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This deletes a comment by its specific id
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
