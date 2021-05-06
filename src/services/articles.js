import express from "express";
import { Article } from "../db/Article.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).send("works!");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/:authorId/:categoryId", async (req, res, next) => {
  try {
    const newArticle = await Article.create({
      ...req.body,
      authorId: req.params.authorId,
      categoryId: req.params.categoryId,
    });
    res.status(201).send(newArticle);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
