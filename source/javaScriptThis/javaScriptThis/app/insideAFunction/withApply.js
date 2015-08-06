var f = function (a, b, c) {
    console.log(this.x + a + b + c);
}

f.apply({ x: 4 }, [1, 2, 3]);

f.apply({ x: 5 }, [1, 2, 3]);

//======================================
var Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.read = function() {
        console.log("Reading " + this.title + ' by ' + this.author);
    };
};

var mistbornSeries = [
    new Book('Mistborn', 'Brandon Sanderson'),
    new Book('The Well of Assension', 'Brandon Sanderson'),
    new Book('The Hero of Ages', 'Brandon Sanderson')
];

var stormLightArchive = [
    new Book('The Way of Kings', 'Brandon Sanderson'),
    new Book('The Words of Radiance', 'Brandon Sanderson')	
];
	
var sandersonsBooks = [];
Array.prototype.push.apply(sandersonsBooks, mistbornSeries);
Array.prototype.push.apply(sandersonsBooks, stormLightArchive);

//======================================

//Here we don't even care about the value of this
//we just want to call a function with an array of arguments
var max = Math.max.apply(null, [1, 2, 3]);
var min = Math.min.apply(null, [1, 2, 3]);
