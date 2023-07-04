"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeController = void 0;
const employees_1 = require("../data/employees");
exports.employeeController = {
    getEmployees: (req, res) => {
        try {
            const result = employees_1.employees.map(({ id, names, surnames, email, phoneNumber, company, notes }) => ({
                id,
                names,
                surnames,
                email,
                phoneNumber,
                company,
                notes,
            }));
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Error fetching employees from the database" });
        }
    },
    getEmployeeByID: (req, res) => {
        try {
            if (!req.params.id || !parseInt(req.params.id))
                return res.status(400).json("Invalid Employee ID, try again.");
            const result = employees_1.employees.find((employee) => employee.id === parseInt(req.params.id));
            if (result)
                res.json(result);
            else
                res
                    .status(404)
                    .json({ message: "Employee not found, please try again" });
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Can't get employee from the database :( try again" });
        }
    },
    getEmployeeByNameOrSurname: (req, res) => {
        try {
            const { name, surname } = req.query;
            let filteredEmployees = employees_1.employees;
            if (name) {
                const lowercaseName = name.toLowerCase();
                filteredEmployees = filteredEmployees.filter((employee) => employee.names.toLowerCase().includes(lowercaseName));
            }
            if (surname) {
                const lowercaseSurname = surname.toLowerCase();
                filteredEmployees = filteredEmployees.filter((employee) => employee.surnames.toLowerCase().includes(lowercaseSurname));
            }
            const result = filteredEmployees.map(({ id, names, surnames, email, phoneNumber, company, notes }) => ({
                id,
                names,
                surnames,
                email,
                phoneNumber,
                company,
                notes,
            }));
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Error fetching employees from the database" });
        }
    },
    addEmployee: (req, res) => {
        try {
            const newEmployee = req.body;
            const newEmployeeId = generateUniqueId();
            newEmployee.id = newEmployeeId;
            employees_1.employees.push(Object.assign({}, newEmployee));
            res.json({ message: "Succesfuly added employee to Agenda" });
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Error adding employee, please try again" });
        }
    },
    deleteEmployee: (req, res) => {
        try {
            const employeeId = req.params.id;
            const employeeIndex = employees_1.employees.findIndex((employee) => employee.id === employeeId);
            if (employeeIndex === -1) {
                return res
                    .status(404)
                    .json({ message: "Employee not found in agenda" });
            }
            employees_1.employees.splice(employeeIndex, 1);
            res.json({ message: "Employee deleted successfully from the agenda" });
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({
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
