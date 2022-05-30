function globalThis() {
  console.log(this);
}

var obj = {
  name: "Object",
  arrowFn: (name) => {
    console.log(this);
  },
  fn: function () {
    console.log(arguments);
    var self = this;
    console.log(this);
    this.arrowFn();
    console.log(self);
    function insideFn(arg) {
      console.log(arg, this);
    }
    insideFn("inside");
  },
};

globalThis();
obj.arrowFn();
obj.fn("abc", "def", "ghi");

console.log(Math.max([1, 2, 3]));

var solve = (function (problem) {
  console.log("Here's the solution to " + problem);
  return "The calculations";
})("Poincaré's something");

// solve("Schwarcz conjecture");
console.log(solve);

function car(manufacturer) {
  return function (model) {
    console.log(manufacturer, model);
  };
}

console.log(car("Ford")); //('Fiesta do Luís');

function createFunctions() {
  var manufacturers = ["Ford", "BMW", "VW", "GM"];
  var fnArr = [];
  for (let i = 0; i < 4; i++) {
    fnArr.push(car(i));
  }
  return fnArr;
}

createFunctions().forEach((fn) => fn("car"));

function introduce(yourLine) {
  return function (name) {
    console.log(`Hi, ${name}. ${yourLine}`);
  };
}

let introChrisTo = introduce(`I'm Chris, a software engineer at Epam`);

introChrisTo(`George`);

function buildFunctions() {
  let arr = [];
  var varfora = 0;
  let letfora = 0;
  for (var vardentro = 0; vardentro < 3; vardentro++) {
    let letdentro = vardentro;
    varfora++;
    letfora++;
    arr.push(function () {
      console.log(
        `vardentro: ${vardentro} letdentro: ${letdentro} varfora: ${varfora} letfora: ${letfora}`
      );
    });
  }
  return arr;
}

let arr = buildFunctions();
arr[0]();
arr[1]();
arr[2]();

function buildFunctions2() {
  let arr = [];
  var varfora = 0;
  let letfora = 0;
  for (var vardentro = 0; vardentro < 3; vardentro++) {
    let letdentro = vardentro;
    varfora++;
    letfora++;
    arr.push(
      (function (vardentro, letdentro, varfora, letfora) {
        return function () {
          console.log(
            `vardentro: ${vardentro} letdentro: ${letdentro} varfora: ${varfora} letfora: ${letfora}`
          );
        };
      })(vardentro, letdentro, varfora, letfora) //IIFEs create new variable closures that retain value from function creation time
    );
  }
  return arr;
}

let arr2 = buildFunctions2();
arr2[0]();
arr2[1]();
arr2[2]();

function readMyVars(callback) {
  let a = "Me";
  let b = "Myself";
  let c = "I";
  callback(a, b, c);
}

readMyVars(function (a, b, c) {
  console.log(a, b, "and", c);
});

let myCar = {
  brand: "VW",
  model: "T-Cross",
  getCarName: function () {
    return this.brand + " " + this.model;
  },
};

let logCar = function () {
  console.log(`[log] ${this.getCarName()}`);
};

var logMyCar = logCar.bind(myCar);
logMyCar();

function Person() {
  console.log(this);
  this.name = "Chris";
}

Person.prototype.sayHi = function (greeting = "Hi") {
  console.log(`${greeting}, I'm ${this.name}`);
};

//polyfill
if (!Object.create) {
  Object.create = function (obj) {
    if (arguments.length > 1) {
      throw new Error("Object.create takes 1 argument only");
    }
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

setTimeout(() => {
  $(".list").append("<li>Make some magic happen</li>");
}, 1500);

$(".list").on("mouseover", function () {
  $(this).css("color", "orange");
});

$("li").addClass("yellow");

$("li").

console.log(G$("Chris", "Sousa", "pt", "informal").setLanguage("es"));

