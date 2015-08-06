
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
sandersonsBooks.push.apply(sandersonsBooks, mistbornSeries);
sandersonsBooks.push.apply(sandersonsBooks, stormLightArchive);

//======================================

var ids = [1,2,3];
var promises = [];

for (var i = 0; i < ids.length; i++) {
    
}

$.when

//======================================

var max = Math.max.apply(null, [1, 2, 3]);
var min = Math.min.apply(null, [1, 2, 3]);


