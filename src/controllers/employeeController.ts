import { employees } from "../data/employees";
import { Employee } from "../interface/employeeInterface";
import jwt from "jsonwebtoken";


export const employeeController = {
  login: (req: any, res: any) => {
    try {
      const { email, password } = req.body;
      const employee = employees.find(
        (employee) => employee.email === email && employee.password === password
      );

      if (employee) {
        const token = jwt.sign({ id: employee.id }, process.env.SECRET_KEY!, {
          algorithm: "HS256",
          expiresIn: "24h",
        });

        res.status(200).json({ token });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error when trying log in" });
    }
  },

  getEmployees: (req: any, res: any) => {
    try {
      const result = employees.map((employee) => {
        const { password, ...employeeWithoutPassword } = employee;
        return employeeWithoutPassword;
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching employees from the database" });
    }
  },

  getEmployeeByID: (req: any, res: any) => {
    try {
      if (!req.params.id || !parseInt(req.params.id))
        return res.status(400).json("Invalid Employee ID, try again.");

      const result = employees.find(
        (employee) => employee.id === parseInt(req.params.id)
      );
      if (result) res.json(result);
      else
        res
          .status(404)
          .json({ message: "Employee not found, please try again" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Can't get employee from the database :( try again" });
    }
  },

  getEmployeeByNameOrSurname: (req: any, res: any) => {
    try {
      const { name, surname } = req.query;

      let filteredEmployees = employees;

      if (name) {
        const lowercaseName = name.toLowerCase();
        filteredEmployees = filteredEmployees.filter((employee) =>
          employee.names.toLowerCase().includes(lowercaseName)
        );
      }

      if (surname) {
        const lowercaseSurname = surname.toLowerCase();
        filteredEmployees = filteredEmployees.filter((employee) =>
          employee.surnames.toLowerCase().includes(lowercaseSurname)
        );
      }

      const result = employees.map((employee) => {
        const { password, ...employeeWithoutPassword } = employee;
        return employeeWithoutPassword;
      });

      res.json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching employees from the database" });
    }
  },

  addEmployee: (req: any, res: any) => {
    try {
      const newEmployee: Employee = req.body;

      const newEmployeeId = generateUniqueId();
      newEmployee.id = newEmployeeId;

      employees.push({
        ...newEmployee,
      });

      res.json({ message: "Succesfuly added employee to Agenda" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error adding employee, please try again" });
    }
  },

  deleteEmployee: (req: any, res: any) => {
    try {
      const employeeId: string = req.params.id;
      console.log(req.params.id);

      const employeeIndex = employees.findIndex(
        (employee) => employee.id.toString() === employeeId
      );

      if (employeeIndex === -1) {
        return res
          .status(404)
          .json({ message: "Employee not found in agenda" });
      }

      employees.splice(employeeIndex, 1);

      res.json({ message: "Employee deleted successfully from the agenda" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error deleting employee from the agenda, please try again",
      });
    }
  },
};

function generateUniqueId() {
  const maxId = 9999;
  const minId = 1000;

  const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  return randomId;
}
