import { SendMailToUser } from "../Controllers/MailController.js";
import express from "express";

const MailRouter = express.Router();

MailRouter.post("/send", SendMailToUser);
export default MailRouter;