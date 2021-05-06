import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).send("works!");
  } catch (error) {
    console.log(error);
  }
});

export default router;
