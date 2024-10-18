import { Router } from "express";
import {
  findSubscripcion,
  createSubscripcion,
  cancelSubscripcion,
  pauseSubscripcion,
  reactiveSubscripcion,
  storeDonation,
} from "../controllers/subscripcion.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.post("/create-subscripcion", createSubscripcion);

router.get("/find-subscripcion", 
// authenticate, 
findSubscripcion);

router.put("/cancel-subscripcion", authenticate, cancelSubscripcion);

router.put("/pause-subscripcion", authenticate, pauseSubscripcion);

router.put("/reactive-subscripcion", authenticate, reactiveSubscripcion);

router.get("/thanks/:preapproval_id", storeDonation);

export default router;
