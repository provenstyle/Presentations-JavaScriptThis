var Book = function (title, author) {

    var getInfo = function () {
        return this.title + ' by ' + this.author;
    }.bind(this);

    this.title = title;
    this.author = author;
    this.read = function () {
        console.log("Reading " + getInfo(this));
    };
    this.toString = getInfo;
};

var wayOfKings = new Book("The Way of King", "Brandon Sanderson");
wayOfKings.read();
console.log(wayOfKings.toString());

var wordOfRadiance = new Book("Words of Radiance", "Brandon Sanderson");
wordOfRadiance.read();
console.log(wordOfRadiance.toString());

//bind can not be overriden with call
var greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss");
wayOfKings.read.call(greenEggsAndHam);