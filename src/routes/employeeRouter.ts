import { Router } from "express";
import { employeeController } from "../controllers/employeeController";
import verifyToken from "../../middleware/verifyJWT";

const employeeRouter = Router();

employeeRouter.get("/employees", verifyToken, employeeController.getEmployees);
employeeRouter.get("/employees/:id", verifyToken, employeeController.getEmployeeByID);
employeeRouter.get("/employee", verifyToken, employeeController.getEmployeeByNameOrSurname);
employeeRouter.post("/addemployee", verifyToken, employeeController.addEmployee);
employeeRouter.delete("/employees/:id", verifyToken, employeeController.deleteEmployee);
employeeRouter.post("/login", employeeController.login);
export default employeeRouter;
