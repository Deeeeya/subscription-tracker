import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.get("/", sendReminders);

workflowRouter.post("/subscription/reminder", sendReminders);

export default workflowRouter;
