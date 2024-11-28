import express from "express";
import { testploy } from "../controllers/test.controller.js";
const router = express.Router();

router.get('/test', testploy)

export default router;