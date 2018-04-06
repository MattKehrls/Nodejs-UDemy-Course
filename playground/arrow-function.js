var square = (x) => {
    var result = x * x;
    return result;
};

console.log(square(9));

//var square = (x) => { x * x }; //simple version of the top example. Return is implyed

var user = {
    name: "Matt",
    sayHi: () => { //ES6 Arrow Function demo(can NOT use 'this' keyword, or 'arguments')
        console.log(arguments); //prints the arguments for the "Globals Arguments" varible
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () { //ES6 making a simplifed method(function) on an object demo
        console.log(arguments); //prints the arguments for ther sayHiAlt function
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHiAlt();