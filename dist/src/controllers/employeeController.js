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
    }
};
