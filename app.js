// 1 the task
let string = 'some test string';
let res = `${string[0].toUpperCase()}${string.slice(1, 15)}` + `${string[15].toUpperCase()}${string.slice(16)}`;
console.log(res);

// 2 the task
let pos = string.indexOf('string');
console.log(pos);

// 3 the task
let pos_backspace = string.lastIndexOf(' ');
console.log(pos_backspace);

// 4 the task
let str = string.slice(5, 10);
console.log(str);

// 5 the task
let number = Math.PI;
round = parseFloat(number.toFixed(2));
console.log(number, round);

// 6 the task
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min, max);

// 7 the task
let randomNamber = Math.random();
randomNamber = parseFloat(randomNamber.toFixed(2));
console.log(randomNamber);

// 8 the task
let randomNamber1 = Math.floor(Math.random() * 10) + 1;
console.log(randomNamber1);

// 9 the task
let num1 = 0.6;
let num2 = 0.7;
sum = ((num1 * 10 + num2 * 10) / 10);
console.log(sum);

// 10 the task
const obj = {
  product: 'IPhone'
};

obj.price = 1000;
obj.currency = 'dollar';
obj.details = {};
obj.details.model = 'x-5';
obj.details.color = 'red';
console.log(obj);



