"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyController = void 0;
const companies_1 = require("../data/companies");
const employees_1 = require("../data/employees");
exports.companyController = {
    getCompany: (req, res) => {
        try {
            const result = companies_1.companies.map(({ id, name, webSite, notes }) => ({
                id,
                name,
                webSite,
                notes,
            }));
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Error fetching company, please try again" });
        }
    },
    getCompanyByID: (req, res) => {
        try {
            if (!req.params.id || !parseInt(req.params.id))
                return res.status(400).json("Invalid Company ID, try again");
            const result = companies_1.companies.find((company) => company.id === parseInt(req.params.id));
            if (result)
                res.json(result);
            else
                res
                    .status(404)
                    .json({ message: "Company not found, please try again" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Cannot get the company you are looking for, please try again",
            });
        }
    },
    addCompany: (req, res) => {
        try {
            const newCompany = req.body;
            const newCompanyId = generateUniqueId();
            newCompany.id = newCompanyId;
            companies_1.companies.push(Object.assign({}, newCompany));
            res.json({ message: "Company sucessfuly added to Agenda" });
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ message: "Error adding company to agenda, please try again" });
        }
    },
    deleteCompany: (req, res) => {
        try {
            const companyId = req.params.id;
            const companyToBeDeleted = companies_1.companies.find((company) => company.id === companyId);
            if (!companyToBeDeleted) {
                return res.status(404).json({ message: "Company not found in agenda" });
            }
            const checkEmployees = employees_1.employees.some((employee) => employee.company === (companyToBeDeleted === null || companyToBeDeleted === void 0 ? void 0 : companyToBeDeleted.name));
            if (checkEmployees) {
                return res.status(400).json({
                    message: "Cannot delete the company as it has associated employees",
                });
            }
            const companyIndex = companies_1.companies.findIndex((company) => company.id === companyId);
            if (companyIndex === -1) {
                return res.status(404).json({ message: "company not found in agenda" });
            }
            companies_1.companies.splice(companyIndex, 1);
            res.json({ message: "company deleted successfully from the agenda" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error deleting company from the agenda, please try again",
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
