
var Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.read = function() {
        return "Reading " + this.title + ' by ' + this.author;
    };
};

var book = new Book('Mistborn', 'Brandon Sanderson');

log(book.read());