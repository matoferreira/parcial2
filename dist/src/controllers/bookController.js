"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const books_1 = require("../data/books");
exports.booksController = {
    getBooks: (req, res) => {
        try {
            const result = books_1.books.map(({ isbn, title, author, pages }) => ({
                isbn, title, author, pages
            }));
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error fetching books from database" });
        }
    },
    getBookByISBN: (req, res) => {
        try {
            if (!req.params.id || !parseInt(req.params.id))
                return res.status(400).json("invalid ISBN");
            const result = books_1.books.find((book) => book.isbn === parseInt(req.params.id));
            if (result)
                res.json(result);
            else
                res.status(404).json({ message: "Book not found, check ISBN just in case" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "We couldn't get you the book :(" });
        }
    }
};
