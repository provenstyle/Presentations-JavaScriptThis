
var F = function(a) {
    console.log(this);
    console.log('window: ' + (this === window));
    console.log('F: ' + (this === F));
    console.log('instance: ' + (Object.getPrototypeOf(this).constructor === F));
    console.log('instance: ' + (this instanceof F));
}

var f = new F();

F();

var o = {
    f: F
}

o.f();

//======================================

var Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.read = function() {
        console.log("Reading " + this.title + ' by ' + this.author);
    };
};

var book = new Book('Mistborn', 'Brandon Sanderson');
book.read();

var anotherBook = new Book('Steelheart', 'Brandon Sanderson');
anotherBook.read();

var f = book.read;
f();