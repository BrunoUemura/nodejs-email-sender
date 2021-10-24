import { Router } from "express";
import { handle } from "../controllers/EmailSenderController";

const routes = Router();

routes.get("/api/v1/", (_, res) => {
  res.send("Email sender API");
});

routes.post("/api/v1/send-email", handle);

export { routes };
