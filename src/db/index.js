import sequelize from "sequelize";
import ArticleModel from "./Article.js";
import AuthorModel from "./Author.js";
import CategoryModel from "./Category.js";
import ReviewModel from "./Review.js";

const { Sequelize, DataTypes } = sequelize;

export const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { port: process.env.PGPORT, host: process.env.PGHOST, dialect: "postgres" }
);

export const Article = ArticleModel(sequelize, DataTypes);
export const Author = AuthorModel(sequelize, DataTypes);
export const Category = CategoryModel(sequelize, DataTypes);
export const Review = ReviewModel(sequelize, DataTypes);

Author.hasMany(Article);
Article.belongsTo(Author);

Article.hasMany(Review);
Review.belongsTo(Article);

Category.hasMany(Article);
Article.belongsTo(Category);

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((error) => console.log(error));

export default { sequelize, Article, Author, Category, Review };
