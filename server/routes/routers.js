import express from "express";
import { getJobData } from "../controllers/getJobData.js";
// import { getUserData } from "../controllers/getUserData.js";

const router = express.Router();

router.get("/", getJobData);
// router.get("/:id", getUserData);

export default router;
