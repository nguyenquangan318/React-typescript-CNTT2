//Xay dung lop Book
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getInfo = function () {
        return "tieu de: ".concat(this.title, ", tac gia: ").concat(this.author);
    };
    return Book;
}());
//Xay dung lop Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.showBooks = function () {
        this.books.forEach(function (book) {
            console.log(book.getInfo());
        });
    };
    return Library;
}());
var book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
var book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
var book3 = new Book("Harry Potter", "J.K. Rowling");
var book4 = new Book("Lão Hạc", "Nam Cao");
var book5 = new Book("Tắt Đèn", "Ngô Tất Tố");
var myLib = new Library();
myLib.addBook(book1);
myLib.addBook(book2);
myLib.addBook(book3);
myLib.addBook(book4);
myLib.addBook(book5);
myLib.showBooks();
