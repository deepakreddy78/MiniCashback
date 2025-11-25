import { Router } from "express";
import { purchaseItems } from "../controller/user.controller.js"

const router = Router();


router.post('/purchase', purchaseItems)

export default router;