class Book {
    id: number;
    title: string;
    author: string;
    year: number;
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year
    }
}

class TextBook extends Book {
    grade: number;
}

class Comic extends Book {
    studio: string;
}


class Library<T extends Record<string, any>> {
    books: T[] = [];
    addBook(book: T): void {
        this.books.push(book);
    }
    getBookById(id: number): T | undefined {
        return this.books.find((book) => book.id === id)
    }
    removeBook(id: number): void {
        this.books = this.books.filter((book) => book.id !== id)
    }
    updateBook(id: number, updatedBook: T): void {
        let book = this.books.find((book) => book.id === id);
        if (book) {
            book = updatedBook
        } else {
            console.log("Khong tim thay sach");
        }
    }
    listBooks(): T[] {
        return this.books
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        return this.books.filter((book) => book.title.includes(searchTerm)
            || book.author.includes(searchTerm))
    }
    getTotalBooks(): number {
        return this.books.length
    }
    findBookByYear(year: number) {
        return this.books.filter((book) => book.year === year)
    }
}

let lib = new Library<TextBook | Comic>()
lib.addBook({ id: 1, title: "book1", author: "author1", year: 1990, grade: 5 })
lib.addBook({ id: 2, title: "book2", author: "author2", year: 1990, studio: "marvel" })
