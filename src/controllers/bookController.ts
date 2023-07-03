import { books } from "../data/books";
import { Book } from "../interface/bookInterface";

export const booksController = {
    getBooks: (req: any, res: any) => {
        try {
            const result: Book[] = books.map(
                ({ isbn, title, author, pages }) => ({
                    isbn, title, author, pages
                })
            );
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Error fetching books from database"});
        }
    },

    getBookByISBN: (req: any, res: any) => {
        try {
            if (!req.params.isbn || !parseInt(req.params.isbn))
                return res.status(400).json("invalid ISBN");

            const result = books.find(
                (book) => book.isbn === parseInt(req.params.isbn)
            );

            if (result) res.json(result);
            else res.status(404).json({message: "Book not found, check ISBN just in case"});
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "We couldn't get you the book :("})
        }
    }
}