"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const companyRouter_1 = __importDefault(require("./companyRouter"));
const employeeRouter_1 = __importDefault(require("./employeeRouter"));
const Routes = (app) => {
    app.use(employeeRouter_1.default);
    app.use(companyRouter_1.default);
};
exports.default = Routes;
