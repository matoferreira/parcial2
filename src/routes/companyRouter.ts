import { Router } from "express";
import { companyController } from "../controllers/companyController";
import verifyToken from "../../middleware/verifyJWT";

const companyRouter = Router();

companyRouter.get("/companies", verifyToken, companyController.getCompany);
companyRouter.get("/companies/:id", verifyToken, companyController.getCompanyByID);
companyRouter.post("/addcompany", verifyToken, companyController.addCompany);
companyRouter.delete("/deleteCompany/:id", verifyToken, companyController.deleteCompany);
export default companyRouter;
