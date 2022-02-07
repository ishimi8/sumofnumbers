// const _ = require('underscore');

function sumfor(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    count += list[i];
  }
  return count;
}

console.log(sumfor([1, 2, 3, 4, 5]));

function sumWhile(list) {
  let size = 0;
  let count = 0;
  while (size < list.length) {
    count += list[size];
    size++;
  }
  return count;
}
console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return (list[0] + sumRecursion(list.slice(1, list.length)));
}

console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
