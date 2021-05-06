import express from "express";
import { Author } from "../db/index.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).send(author);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Author.destroy({ where: { id: req.params.id } });
    res.status(204).send("Deleted");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export default router;
