import { Router } from "express";
import { employeeController } from "../controllers/employeeController";

const employeeRouter = Router();

employeeRouter.get("/employees", employeeController.getEmployees);
employeeRouter.get("/employees/:id", employeeController.getEmployeeByID);
employeeRouter.get("/employee", employeeController.getEmployeeByNameOrSurname);

export default employeeRouter;