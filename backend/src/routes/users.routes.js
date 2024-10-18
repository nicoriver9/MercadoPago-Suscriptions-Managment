import { Router } from "express";
import {
  createAdministrator,
  deleteAdministrator,
  listAdministrators,
  updateAdministrator,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/getallusers", listAdministrators);
router.post("/createuser", createAdministrator);
router.put("/updateuser/:id", updateAdministrator);
router.delete("/deleteuser/:id", deleteAdministrator);

export default router;
