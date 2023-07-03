import { Router } from "express";
import { booksController } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.get("/books", booksController.getBooks);
bookRouter.get("/books/:isbn", booksController.getBookByISBN);

export default bookRouter;