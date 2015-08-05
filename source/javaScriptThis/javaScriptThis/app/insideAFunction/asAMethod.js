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
    about: function() {
        console.log(this.title + ' by ' + this.author);
        console.log('Is book: ' + (this === book));
        console.log('Is window: ' + (this === window));
    }
}

book.about();

var f = book.about;
f();

//======================================

var anotherBook = {
    title: "Green Eggs and Ham",
    author: "Dr. Seuss",
    about: book.about
}

anotherBook.about();