"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyController = void 0;
const companies_1 = require("../data/companies");
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
            res
                .status(500)
                .json({
                message: "Cannot get the company you are looking for, please try again",
            });
        }
    },
};
