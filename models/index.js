const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");

User.hasMany(Comment, {
  foreignKey: "user_id",
  as: "comment_creator",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
  as: "post_creator",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "comment_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "comment_id",
  as: "post_creator",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Comment, Blog };
