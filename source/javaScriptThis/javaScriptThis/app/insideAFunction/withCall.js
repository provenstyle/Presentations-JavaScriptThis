﻿var Book = function (title, author) {
    this.title = title;
    this.author = author;
    this.read = function () {
        console.log("Reading " + this.title + ' by ' + this.author);
    };
};

var book = new Book("The Way of Kings", "Brandon Sanderson");
book.read();

var book = new Book("Words of Radiance", "Brandon Sanderson");

////======================================

//function getInfo() {
//    return this.title + ' by ' + this.author;
//}

//var Book = function (title, author) {
//    this.title = title;
//    this.author = author;
//    this.read = function () {
//        console.log("Reading " + getInfo.call(this));
//    };
//    this.toString = getInfo;
//};

//var book = new Book("The Way of Kings", "Brandon Sanderson");
//book.read();

//console.log(book.toString());

//var book = new Book("Words of Radiance", "Brandon Sanderson");
//console.log(getInfo.call(book));
