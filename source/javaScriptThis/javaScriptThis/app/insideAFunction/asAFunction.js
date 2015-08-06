//window.title = "The Way of Kings";
//window.author = "Brandon Sanderson";

var f = function () {
    console.log(this);
    console.log(this === window);
    console.log(this.title + ' by ' + this.author);
}

f();