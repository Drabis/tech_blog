const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");

Blog.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

Blog.hasMany(Comment, {
  foreignKey: "blogId",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

module.exports = { User, Comment, Blog };
