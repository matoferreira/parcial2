"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("../controllers/companyController");
const companyRouter = (0, express_1.Router)();
companyRouter.get("/companies", companyController_1.companyController.getCompany);
companyRouter.get("/companies/:id", companyController_1.companyController.getCompanyByID);
companyRouter.post("/addcompany", companyController_1.companyController.addCompany);
companyRouter.delete("/deleteCompany/:id", companyController_1.companyController.deleteCompany);
exports.default = companyRouter;
