//Xay dung lop Book
class Book {
    private title: string;
    private author: string;
    private readonly id: number;
    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id
    }
    getInfo(): string {
        return `tieu de: ${this.title}, tac gia: ${this.author}`
    }
    getId(): number {
        return this.id;
    }
    setTitleAndAuthor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
//Xay dung lop Library
class Library {
    books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        this.books.forEach((book) => {
            console.log(book.getInfo());
        })
    }
    updateBook(id: number, newTitle: string, newAuthor: string): void {
        let findBook = this.books.find((book) => book.getId() === id);
        if (findBook) {
            book1.setTitleAndAuthor(newTitle, newAuthor);
        } else {
            console.log("Khong tim thay");
        }
    }
    deleteBook(id: number): void {
        let deleteBookIndex = this.books.findIndex((book) => book.getId() === id)
        if (deleteBookIndex != -1) {
            this.books.splice(deleteBookIndex, 1);
        } else {
            console.log("Khong tim thay");
        }
    }
}
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1);
const book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán", 2);
const book3 = new Book("Harry Potter", "J.K. Rowling", 3);
const book4 = new Book("Lão Hạc", "Nam Cao", 4);
const book5 = new Book("Tắt Đèn", "Ngô Tất Tố", 5);
let myLib = new Library();
myLib.addBook(book1);
myLib.addBook(book2);
myLib.addBook(book3);
myLib.addBook(book4);
myLib.addBook(book5);
myLib.showBooks()