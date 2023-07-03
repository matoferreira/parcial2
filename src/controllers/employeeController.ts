import { employees } from "../data/employees";
import { Employee } from "../interface/employeeInterface";

export const employeeController = {
  getEmployees: (req: any, res: any) => {
    try {
      const result: Employee[] = employees.map(
        ({ id, names, surnames, email, phoneNumber, company, notes }) => ({
          id,
          names,
          surnames,
          email,
          phoneNumber,
          company,
          notes,
        })
      );
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

      const result: Employee[] = filteredEmployees.map(
        ({ id, names, surnames, email, phoneNumber, company, notes }) => ({
          id,
          names,
          surnames,
          email,
          phoneNumber,
          company,
          notes,
        })
      );

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
};

function generateUniqueId() {
  const maxId = 9999;
  const minId = 1000;

  const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  return randomId;
};
