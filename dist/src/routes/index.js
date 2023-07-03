"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookRouter_1 = __importDefault(require("./bookRouter"));
const Routes = (app) => {
    app.use(bookRouter_1.default);
};
exports.default = Routes;
