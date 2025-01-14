var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let a = [];

for (let i = 0; i < numbers.length; i++) {
  let is_d = false;  
  for (let j = 0; j < a.length; j++) {
    if (numbers[i] === a[j]) {
      is_d = true;  
      break;
    }
  }
  
  if (!is_d) {
    a.push(numbers[i]);  
  }
}

console.log(a);  