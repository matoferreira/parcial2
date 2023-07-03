"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = require("../controllers/bookController");
const bookRouter = (0, express_1.Router)();
bookRouter.get("/books", bookController_1.booksController.getBooks);
bookRouter.get("/books/:isbn", bookController_1.booksController.getBookByISBN);
exports.default = bookRouter;
