const sequelize = require("../config/connection.js");
const { Blog } = require("../models");

const postData = [
    {
        userId: 1,
        blogContent: "This is a blog about SQL."
    },
    {
        userId: 2,
        blogContent: "This is a blog about JS."
    }
]

const seedPosts = () => Blog.bulkCreate(postData);

module.exports = seedPosts;
