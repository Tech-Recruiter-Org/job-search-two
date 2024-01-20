import express from "express";
import { getJobData } from "../controllers/getJobData.js";

const router = express.Router();

router.get("/", getJobData);

export default router;
