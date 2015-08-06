
//window.title = "The Way of Kings";
//window.author = "Brandon Sanderson";

var f = function () {
    "use strict";

    console.log(this);
    console.log(this === undefined);
    console.log(this.title + ' by ' + this.author);
}

f();