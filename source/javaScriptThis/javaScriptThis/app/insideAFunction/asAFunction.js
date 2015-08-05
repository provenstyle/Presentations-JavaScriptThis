window.name = "The Way of Kings";
window.author = "Brandon Sanderson";

var f = function () {
    console.log(this);
    console.log(this.name + ' by ' + this.author);
}

f();