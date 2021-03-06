(function () {
  let color = "red";
  function printColor() {
    console.log(color);
  }

  printColor();
})();

//Funciones que regresan funciones

function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());

// const counter = {
//   count: 3,
// };
// console.log(counter.count);

function makeCounter(n) {
  let count = n;
  return {
    increase: function () {
      count = count + 1;
    },
    decrease: function () {
      count = count - 1;
    },
    getcount: function () {
      return count;
    },
  };
}
let counter = makeCounter(10);
console.log("The counter is", counter.getcount());

console.log("the count is", counter.getcount());
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log("the counter is", counter.getcount());
counter.decrease();
counter.decrease();

counter.decrease();

counter.decrease();

counter.decrease();

console.log("the counter is", counter.getcount());
