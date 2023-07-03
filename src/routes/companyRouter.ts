import { Router } from "express";
import { companyController } from "../controllers/companyController";

const companyRouter = Router();

companyRouter.get("/companies", companyController.getCompany);
companyRouter.get("/companies/:id", companyController.getCompanyByID);
companyRouter.post("/addcompany", companyController.addCompany);
export default companyRouter;
