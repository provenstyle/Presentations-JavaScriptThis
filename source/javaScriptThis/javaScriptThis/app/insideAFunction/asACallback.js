var Book = function (title, author) {
    this.title = title;
    this.author = author;
    this.read = function(book) {
        console.log("Reading " + book.title + ' by ' + book.author);
    };
    this.readAllBooks = function(books) {
        _.each(books, function (book) {
            this.read(book);
        }, this);
    }
};

var mistbornSeries = [
    new Book('Mistborn', 'Brandon Sanderson'),
    new Book('The Well of Assension', 'Brandon Sanderson'),
    new Book('The Hero of Ages', 'Brandon Sanderson')
];

var book = new Book();
book.readAllBooks(mistbornSeries);

//======================================

$(function () {
    var button = $('.js-button');
    button.click(function() {
        console.log(this);
        console.log(this === button[0]);
    });
});