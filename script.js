

const arr = [
  1234,
  1345,
  1567,
 'test',
  1598,
  1356,
  1789,
  1450,
  1204,
  1567,
  1500,
  "Igor"
];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }

  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(`min number: ${min}`);
console.log(`max number: ${max}`);
for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let n = 1; n <= i; n++) {
    str += '#';
  }
  console.log(str);
}

arr.forEach((argument)=> {
  if (Number.isInteger(argument)) {
      console.log(argument);
  }
}) 
