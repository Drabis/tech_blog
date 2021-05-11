const sequelize = require("../config/connection.js");
const { Comment } = require("../models");

const commentData = [
    {
        userId: 1,
        postId: 2,
        commentContent: "Cool post!"
    },
    {
        userId: 2,
        postId: 1,
        commentContent: "You did great on this Post."
    },
    {
        userId: 1,
        postId: 1,
        commentContent: "Thanks for reading!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
