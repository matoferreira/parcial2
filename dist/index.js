"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.port || 3000;
app.get('/', (req, res) => {
    res.send('Esta funcionando el get');
});
app.listen(port, () => console.log(`App is working, hit it through port ${port}`));
