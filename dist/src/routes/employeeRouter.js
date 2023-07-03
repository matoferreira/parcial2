"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
const employeeRouter = (0, express_1.Router)();
employeeRouter.get("/employees", employeeController_1.employeeController.getEmployees);
employeeRouter.get("/employees/:id", employeeController_1.employeeController.getEmployeeByID);
employeeRouter.get("/employees", employeeController_1.employeeController.getEmployeeByNameOrSurname);
exports.default = employeeRouter;
