var o = {
    m: function() {
        console.log(this);
        console.log(this === o);
    }
};

o.m();

//======================================

var book = {
    title: 'The Well of Assension',
    author: 'Brandon Sanderson',
    read: function() {
        console.log('Reading '+ this.title + ' by ' + this.author);
        console.log('Is book: ' + (this === book));
        console.log('Is window: ' + (this === window));
    }
}

book.read();

var f = book.read;
f();

//======================================

var anotherBook = {
    title: "Green Eggs and Ham",
    author: "Dr. Seuss",
    read: book.read
}

anotherBook.read();