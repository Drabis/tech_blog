const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    blogContent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Blog Text Placeholder.",
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = Blog;
