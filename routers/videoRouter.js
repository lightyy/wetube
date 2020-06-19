import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => {
  res.send("asdfasdfas");
});

export default videoRouter;
