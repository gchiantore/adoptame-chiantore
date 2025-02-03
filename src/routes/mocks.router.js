import { Router } from "express";
const router = Router(); 
//Importan de los controladores: 
import mocksController from "../controllers/mocks.controller.js";

router.get("/mockingpets", mocksController.getMockingPets); 
router.get("/mockingusers", mocksController.getMockingUsers);
router.post("/gereratedata", mocksController.generateData);

export default router; 
